module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PRScheduleDefBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fUserGroup: { public: true, type: 'TEXT' },
           fSerNr: { public: true, type: 'INTEGER' },
           fFPCode: { public: true, type: 'TEXT' },
           fPrintGroupCode: { public: true, type: 'TEXT' },
           fIntdocnr: { public: true, type: 'INTEGER' },
           fEformCode: { public: true, type: 'TEXT' },
           fTyp: { public: true, type: 'INTEGER' } } } } }