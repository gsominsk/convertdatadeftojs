module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndDate: { public: true, type: 'DATE' },
     fEndTime: { public: true, type: 'TIME' },
     ChatLogVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPerson: { public: true, type: 'TEXT' },
           fChatText: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex616: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }