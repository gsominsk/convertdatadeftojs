module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fBefore: { public: true, type: 'TEXT' },
     fAfter: { public: true, type: 'TEXT' },
     fLocalMachineCode: { public: true, type: 'TEXT' } },
  indexes: 
   { CodeIndex230: 
      { fields: [ 'fCode', 'fLocalMachineCode' ],
        indicesType: 'UNIQUE' } } }