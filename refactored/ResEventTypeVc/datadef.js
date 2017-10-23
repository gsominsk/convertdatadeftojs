module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     ResEventTypeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEventGroup: { public: true, type: 'TEXT' },
           fEventType: { public: true, type: 'TEXT' },
           fTransDate: { public: true, type: 'DATE' },
           fStartTime: { public: true, type: 'TIME' },
           fEndTime: { public: true, type: 'TIME' } } } },
  indexes: { SerNrIndex334: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }