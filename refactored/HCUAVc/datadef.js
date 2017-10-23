module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     HCUAVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fResType: { public: true, type: 'TEXT' },
           fScheduleRule: { public: true, type: 'TEXT' },
           fResLoc: { public: true, type: 'TEXT' },
           fNrOfJob: { public: true, type: 'INTEGER' },
           fNrOfDays: { public: true, type: 'INTEGER' } } } },
  indexes: { CUCodeIndex641: { fields: [ 'fCUCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }