var fs  = require('fs');
var util = require('util');

String.prototype.capitalize = function() {
    this.toLowerCase();

    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.reCapitalize = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

/**
 * Для конвертации из datadef.hal в datadef.js вам нужно положить в корневую директорию
 * datadefconverter папку с именем 'hansasource' в которой должна лежать папка 'amaster'
 * в которой лежат файлы datadef.hal. Либо, моежете сами прописать путь к файлу в переменной
 * pathToDatadef.
 *
 * Скрипт считывает первый файл в котором подключаются все datadef-ы записывает их в массив
 * после чего начинает обращаться к каждому из файлов форматируя стандартные структуры хала
 * в js обьекты.
 *
 * - getFileNames - считывает файлы из первого документа datadef.hal и возвращает массив имен
 * файлов по которм будет идти конвертация.
 *
 */

var _pathToDatadef  = 'hansasource/amaster/datadef.hal';
var _pathToFile     = 'hansasource/amaster/';

// название регистра который будем использовать
var _dirName        = '';

// регистр который потом переводится в json
var register        = {};

/**
 * Обьект который хранит куски регистров обьедененные в процедуры
 * В обьекте находятся обьекты (по названию процедуры в регистре)
 * в которых лежат данные (обьекты) по структуре данных из файла.
 *
 * Название каждого процедурного регистра в обьекте состоит из
 * названия процедуры + слова Register. Пример:
 * ITVcDefinitionRegister.
 */

var constRegisters      = {};// процедурный регистр в который сейчас идет запись
var currConstRegister   = {};// название процедуры в которую в данный момент идет запись
var mField              = {};// название матрицы в процедуре в которую в данный момент идет запись
var mProcedureField     = {};// название индекса в который в данный момент идет запись
var procedureArrayName  = '';// имя процедурной матрицы в которую в данный момент идет запись
var arrayName           = '';// имя матрицы в которую в данный момент идет запись
var keyToWrite          = '';
var uniqueKey           = 0;

var _types = {
    M40Val          :"FLOAT",
    M41Val          :"FLOAT",
    M423Val	        :"FLOAT",
    M45Val	        :"FLOAT",
    M4Blob	        :"INTEGER",
    M4Code	        :"TEXT",
    M4Date	        :"DATE",
    M4DateTime      :"DATE",
    M4Duration      :"TIME",
    M4Dummy	        :"TEXT",
    M4Int	        :"INTEGER",
    M4List	        :"TEXT",
    M4Long	        :"INTEGER",
    M4Mark	        :"INTEGER",
    M4Matrix        :"INTEGER",
    M4NLong	        :"INTEGER",
    M4PackedMatrix	:"TEXT",
    M4PhoneNo	    :"TEXT",
    M4PrcStr	    :"FLOAT",
    M4Qty	        :"FLOAT",
    M4Rate	        :"FLOAT",
    M4RLink	        :"TEXT",
    M4Set	        :"INTEGER",
    M4STime	        :"TIME",
    M4Str	        :"TEXT",
    M4TextField	    :"TEXT",
    M4StrSet	    :"TEXT",
    M4Softvars      :"TEXT",
    M4Time	        :"TIME",
    M4UStr	        :"TEXT",
    M4UUID	        :"TEXT",
    M4UVal	        :"FLOAT",
    M4Val	        :"FLOAT",
    M4Text	        :"TEXT",
    M4NegVal	    :"FLOAT",
    M4StatMat	    :"INTEGER",
    M4Prcnt         :"FLOAT",
    M4Pict          :"TEXT", // bytea
    M4TokenList     :"TEXT",
    MailAddrRowType :""
};

// M4TokenList
// M4DateTime
// M4Pict
// M4Softvars


// flags
var commentF            = false;
var commentRowF         = false;
var recordF             = false;
var procedureRecordF    = false;
var mainKeyRecord       = false;
var procedureArrayExists= false;
var arrayExists         = false;
var condition           = false;
var blockWithoutEnding  = false;

// regexp
var eachFileWithPathAmasterPointHal = /amaster\/([a-z0-9]+.hal)/ig;
var multiRowCommentStart            = /\/\*/ig;
var multiRowCommentEnd              = /\*\//ig;
var oneLineComment                  = /^(( *|	*)\/\/)/ig;
// var beginRegisterRecord             = /[^//]recordbegin|blockbegin/ig; // находит 1315
var beginRegisterRecord             = /^ *recordbegin|blockbegin/ig; // находит 1306
var allInBraces                     = /\(.+\)/ig;
var beginArrayOrRecord              = /^( *recordfield| *arraybegin)/ig;
var isRecord                        = /^( *recordfield)/ig;
var isKeyBeginOrEndRecord           = /^( *[a-z]*keybegin| *endrecord)/ig;
var arrayBegin                      = /^( *arraybegin)/ig;
var arrayField                      = /^( *arrayfield)/ig;
var endOfRecord                     = /endrecord|endblock/ig;
var mainKeyCreation                 = /^( *mainkeybegin)/ig;
var keySegment                      = /^( *keysegment)/ig;
var isCondition                     = /^( *if)/ig;
var endOfProcedure                  = /^( *end;)/ig;
var beginProcedureRecord            = /^( *procedure)/ig;
var findProcedureName               = /^( *procedure *[^\(\)]+)/ig;
var checkIfProcedure                = /^(.*\({1,}.*\){1,})/ig;
var isProcedure                     = /^(.*?\()|(.*?\;)/ig;

// Данные для подсчета разных штук
var procedureCalled     = 0; // кол-во вызовов процедур для добавления полей
var createdRegisters    = 0; // кол-во записанных регистров

//smslocvc

// обьект с функциями для вноса данных в созданный регистр
var add = {
    head: (dirName) => {
        _dirName = dirName;
        register = {};
        register.fields = {};  // change when time will come...
        register.fields.id = {  // change when time will come...
            type: _types.M4Int,
            autoIncrement: true,
            primaryKey: true
        }
    },
    recordField : (row) => {
        // если поле recordfield достаем то что в скобках разбиваем на массивы после
        // чего остается всего два элемента первый это название поля второй это его
        // характеристика типа.

        var createdFieldRegister= null;

        row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',')
            .splice(0, 2)
            .map((field) => {
                if ((row.match(arrayBegin) || field == 'M4Matrix')) add.newArray(row);
                else if (field != '-') {
                    createdFieldRegister == null && field != 'M4Matrix'
                        ? register.fields[createdFieldRegister = 'f'+field.capitalize()] = {}
                        : register.fields[createdFieldRegister] = {
                            public  : true,
                            type    : _types[field]
                        };
                }
            });
        createdFieldRegister = null;
    },
    procedureRecordHead : (row) => {
        constRegisters[currConstRegister = row.match(findProcedureName)[0].split(' ')[1]] = {};
    },
    procedureRecordField : (row) => {
        var createdFieldRegister= null;

        row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',')
            .splice(0, 2)
            .map((field) => {
                if ((row.match(arrayBegin) || field == 'M4Matrix')) add.newProcedureArray(row);
                else if (field != '-') {
                    createdFieldRegister == null && field != 'M4Matrix'
                        ? constRegisters[currConstRegister][createdFieldRegister = 'f'+field.capitalize()] = {}
                        : constRegisters[currConstRegister][createdFieldRegister] = {
                            public  : true,
                            type    : _types[field]
                        };
                }
            });
        createdFieldRegister = null;
    },
    newArray: (row) => {
        if (arrayExists == true) return ;
        mField = row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',')[0];
        arrayName = `${_dirName}Matrix`;
        register.fields[arrayName] = {
            public: true,
            type: 'MATRIX',
            label: mField,
            fields: {
                id: { type: 'INTEGER', autoIncrement: true,  primaryKey: true }
            }
        };
        arrayExists = true;
    },
    newProcedureArray: (row) => {
        if (procedureArrayExists == true) return ;

        mProcedureField = row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',')[0];
        procedureArrayName = `procedureMatrix`;
        constRegisters[currConstRegister][procedureArrayName] = {
            public: true,
            type: 'MATRIX',
            label: mProcedureField,
            fields: {
                id: { type: 'INTEGER', autoIncrement: true,  primaryKey: true }
            }
        };

        procedureArrayExists = true;
    },
    pushToArray: (row) => {
        var values = row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',');
        if (register[arrayName] == undefined) {
            add.newArray(row);
        }
        register.fields[arrayName].fields['f'+values[0].capitalize()] = {
            public: true,
            type: _types[values[1]]
        };
    },
    pushToProcedureArray: (row) => {
        var values = row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',');
        if (constRegisters[currConstRegister][procedureArrayName] == undefined)
            add.newProcedureArray(row);
        constRegisters[currConstRegister][procedureArrayName].fields['f'+values[0].capitalize()] = {
            public: true,
            type: _types[values[1]]
        };
    },
    procedureRegisterToRegister: (row) => {
        if (row.match(isProcedure) == null) return;

        var procedureName = row.match(isProcedure)[0].split('(')[0].trim();
        procedureName = procedureName.split(';')[0].trim();
        for (obj in constRegisters) {
            if (obj != procedureName) continue ;
            procedureCalled++;
            for (obj in constRegisters[procedureName]) {
                if (obj == 'indexes') {
                    for (indexes in constRegisters[procedureName][obj])
                        constRegisters[procedureName][obj][indexes].fields.map((field) => {
                            isEmpty(register.fields[field]) ? register.fields[field] = {public: true, type: 'TEXT'} : 0;
                        });
                    register.indexes = constRegisters[procedureName][obj];
                } else if (obj == 'procedureMatrix') {
                    register.fields[`${_dirName}Matrix`] = constRegisters[procedureName][obj];
                } else {
                    register.fields[obj] = constRegisters[procedureName][obj];
                }
            }
        }
    },
    procedureRegisterToProcedure: (row) => {
        if (row.match(isProcedure) == null) return;
        var procedureName = row.match(isProcedure)[0].split('(')[0].trim();
        procedureName = row.match(isProcedure)[0].split(';')[0].trim();
        for (obj in constRegisters)
            if (obj == procedureName) {
                for (obj in constRegisters[procedureName])
                    constRegisters[currConstRegister][obj] = constRegisters[procedureName][obj];
                procedureCalled++;
            }
    },
    createIndexKey: (row) => {
        !register.indexes ? register.indexes = {} : 0;
        keyToWrite = row.match(allInBraces)[0]
                        .substring(1, row.match(allInBraces)[0].length - 1)
                        .split(',')[0]+'Index'+uniqueKey;
        register.indexes[keyToWrite] = {
            fields: [],
            indicesType: 'UNIQUE'
        };
        uniqueKey++;
        mainKeyRecord = true;
    },
    pushToIndexKey: (row) => {
        if (mainKeyRecord == false) return ;
        var field = 'f'+row.match(allInBraces)[0].substring(1, row.match(allInBraces)[0].length - 1).capitalize();

        isEmpty(register.fields[field]) ? register.fields[field] = {public: true, type: 'TEXT'} : 0;

        try {
            register.indexes[keyToWrite].fields.push(field);
        } catch (e) {
            for (index in register.indexes) {
                register.indexes[index].fields.push(field);
                break ;
            }
        }
    },
    createProcedureIndexKey: (row) => {
        keyToWrite = row.match(allInBraces)[0]
            .substring(1, row.match(allInBraces)[0].length - 1)
            .split(',')[0]+'Index'+uniqueKey;

        constRegisters[currConstRegister].indexes = {};
        constRegisters[currConstRegister].indexes[keyToWrite] = {
            fields: [],
            indicesType: 'UNIQUE'
        };
        uniqueKey++;
        mainKeyRecord = true;
    },
    pushToProcedureIndexKey: (row) => {
        if (mainKeyRecord == false) return ;
        constRegisters[currConstRegister].indexes[keyToWrite].fields.push('f'+row.match(allInBraces)[0].substring(1, row.match(allInBraces)[0].length - 1).capitalize());
    }
};

module.exports.startConverting = function () {
    var checkComment    = -1;

    // тестовые флаги !!удалить!!
    var showRegName     = true;

    fs.readFileSync(_pathToDatadef, 'utf8')
        .match(eachFileWithPathAmasterPointHal)
        .map((file) => file.split('/')[1])
        .map((file) => fs.readFileSync(_pathToFile+file, 'utf8'))
        .map((file) => {
            file.split('\n')
                .map((row) => {
                    row.search(multiRowCommentStart)!= -1 ? commentF = true : 0;
                    row.search(multiRowCommentEnd) != -1 ? commentF = false : 0;
                    row.match(isKeyBeginOrEndRecord) == null && mainKeyRecord == true ? 0 : mainKeyRecord = false;
                    row.search(endOfProcedure) != -1 && condition == false && procedureRecordF == true ? procedureArrayExists = procedureRecordF = false : 0;

                    if (commentF == false) {
                        // проверить является ли строка "// record... //"
                        row.match(oneLineComment) != null ? commentRowF = true : 0;
                        row.match(isCondition) != null ? condition = true : 0;
                        if (row.search(endOfProcedure) != -1 && condition == true)
                            condition = false;


                        // первый вход в запись регистра, считываем имя регистра. Ставим флаг записи
                        // в регистр true тоесть на запись в данный регистр.
                        if (row.search(beginRegisterRecord) != -1) {
                            isEmpty(register) == false ? blockWithoutEnding = true : 0;
                            commentRowF == false
                                ? add.head((row.match(allInBraces)[0].substring(1, row.match(allInBraces)[0].length - 1).split(',')[0]))
                                : 0;
                            recordF = true;
                        }

                        // создает процедурный регистр для записи
                        if (row.search(beginProcedureRecord) != -1) {
                            // isEmpty(register) == false ? blockWithoutEnding = true : 0;
                            commentRowF == false ? add.procedureRecordHead(row) : 0;
                            procedureRecordF = true;
                        }

                        // записывает в регистр данные от RecordBegin и до EndRecord
                        if ((recordF == true || procedureRecordF == true) && commentRowF == false) {
                            // все остальные входы по записи регистра до момента пока не найдет
                            // endrecord или endblock после чего происходит поиск по новому регистру

                            // если найден конец записи регистра обнуляем флаг recordF на запись
                            // в данный регистр. Удаляем пустые поля если таковые есть. Делаем запись обьекта в файл.
                            if ((row.search(endOfRecord) != -1 || blockWithoutEnding == true) && _dirName != null) {
                                deleteEmptyObjects();

                                // show.register(register);
                                createFiles();

                                arrayExists         = false;
                                recordF             = false;
                                blockWithoutEnding  = false;
                                showRegName         = true;
                            }

                            // записываем значения с процедур в регистры или другие процедуры
                            recordF == true                                             ? add.procedureRegisterToRegister(row) : 0;
                            procedureRecordF == true                                    ? add.procedureRegisterToProcedure(row) : 0;

                            row.match(beginArrayOrRecord) && recordF == true            ? add.recordField(row) : 0;
                            row.match(arrayField) && recordF == true                    ? add.pushToArray(row) : 0;
                            row.match(mainKeyCreation) && recordF == true               ? add.createIndexKey(row) : 0;
                            row.match(keySegment) && recordF == true                    ? add.pushToIndexKey(row) : 0;

                            row.match(beginArrayOrRecord) && procedureRecordF == true   ? add.procedureRecordField(row) : 0;
                            row.match(arrayField) && procedureRecordF == true           ? add.pushToProcedureArray(row) : 0;
                            row.match(mainKeyCreation) && procedureRecordF == true      ? add.createProcedureIndexKey(row) : 0;
                            row.match(keySegment) && procedureRecordF == true           ? add.pushToProcedureIndexKey(row) : 0;
                        } //else console.log(row, 'OH MY FUCKING GOD ITS ROW COMMENT!!!'); // dev

                        // showRegName = false;  //dev
                        if (showRegName == true) {
                            register = {};
                            _dirName = null;
                            createdRegisters++;
                        }

                        showRegName = false;
                        commentRowF = false;
                    }
                });
            constRegisters = {};
        });
    show.numberOfRegisters();
};

function createFiles () {
    if (!fs.existsSync(`refactored/${_dirName}`)) {
        fs.mkdirSync(`refactored/${_dirName}`);
        fs.mkdirSync(`refactored/${_dirName}/hooks`);
        fs.mkdirSync(`refactored/${_dirName}/windows`);
        fs.writeFileSync(`refactored/${_dirName}/windows/Detail.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/windows/List.js`, `` , 'utf-8');

        fs.writeFileSync(`refactored/${_dirName}/hooks/recordCheck.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordDefaults.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPostCreate.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPostList.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPostRemove.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPostShow.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPostUpdate.js`, `` , 'utf-8');

        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPreCreate.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPreList.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPreRemove.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPreShow.js`, `` , 'utf-8');
        fs.writeFileSync(`refactored/${_dirName}/hooks/recordPreUpdate.js`, `` , 'utf-8');
    }

    fs.writeFileSync(`refactored/${_dirName}/datadef.js`, `module.exports = ${util.inspect(register, false, null)}` , 'utf-8');
}

function deleteEmptyObjects () {
    for (obj in register.fields)
        isEmpty(register.fields[obj]) == true ? delete register.fields[obj] : 0;

    return true;
}

function isEmpty(obj) {
    for(var key in obj)
        if(obj.hasOwnProperty(key)) return false;

    return true;
}

//INFO FUNCTIONS
var show = {
    numberOfRegisters: () => {
        console.log('================================');
        console.log('       $ADDITIONAL INFO$        ');
        console.log('================================');
        console.log('[call procedure]   :', procedureCalled);
        console.log('[created registers]:', createdRegisters);
    },
    register: (register) => {
        console.log("============= register ===========");
        console.log(`============= ${_dirName} ===========`);
        console.log(util.inspect(register, false, null));
        // for (obj in constRegisters)
        //     console.log(obj, constRegisters[obj]);
        // register.indexes ? console.log(register.indexes) : 0;
        console.log("==================================");
    }
};


// FieldIsGroup
// FieldIsUser
// StoreInBaseKey
// SynchronizationIndex
// ImpExpLevel
// AppendListFieldToKeyName
// AppendFieldToKeyName
// SubsetKeyBegin2
// SynchronizationIndex
// NewAutosyncRegister
// FieldIsLocation
// SerialNoBlock
