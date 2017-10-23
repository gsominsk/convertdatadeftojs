module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fPriceList: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fNights: { public: true, type: 'INTEGER' },
     PLProgramVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDayNr: { public: true, type: 'INTEGER' },
           fDayName: { public: true, type: 'TEXT' },
           fEventGroup: { public: true, type: 'TEXT' },
           fEventType: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex336: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }