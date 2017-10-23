module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fYearCode: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fClass: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMonday: { public: true, type: 'INTEGER' },
     fTuesday: { public: true, type: 'INTEGER' },
     fWednesday: { public: true, type: 'INTEGER' },
     fThursday: { public: true, type: 'INTEGER' },
     fFriday: { public: true, type: 'INTEGER' },
     fSaturday: { public: true, type: 'INTEGER' },
     fSunday: { public: true, type: 'INTEGER' },
     SFBHollVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFreeDay: { public: true, type: 'DATE' },
           fSpecDayCode: { public: true, type: 'TEXT' } } } },
  indexes: 
   { YearCodeIndex660: 
      { fields: [ 'fYearCode', 'fType', 'fClass' ],
        indicesType: 'UNIQUE' } } }