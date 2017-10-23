module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRegister: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fHeader: { public: true, type: 'TEXT' },
     fFirstTxt: { public: true, type: 'TEXT' },
     fLastTxt: { public: true, type: 'TEXT' },
     fIgnoreRecordDetails: { public: true, type: 'INTEGER' },
     MailTextVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLanguage: { public: true, type: 'TEXT' },
           fHeader: { public: true, type: 'TEXT' },
           fFirstTxt: { public: true, type: 'TEXT' },
           fLastTxt: { public: true, type: 'TEXT' } } } },
  indexes: { RegisterIndex663: { fields: [ 'fRegister' ], indicesType: 'UNIQUE' } } }