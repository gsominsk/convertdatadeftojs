module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSpecDay: { public: true, type: 'TEXT' },
     fMonday: { public: true, type: 'INTEGER' },
     fTuesday: { public: true, type: 'INTEGER' },
     fWednesday: { public: true, type: 'INTEGER' },
     fThursday: { public: true, type: 'INTEGER' },
     fFriday: { public: true, type: 'INTEGER' },
     fSaturday: { public: true, type: 'INTEGER' },
     fSunday: { public: true, type: 'INTEGER' },
     BHollCustVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFreeDay: { public: true, type: 'DATE' },
           fSpecDayCode: { public: true, type: 'TEXT' } } } },
  indexes: { CustCodeIndex161: { fields: [ 'fCustCode' ], indicesType: 'UNIQUE' } } }