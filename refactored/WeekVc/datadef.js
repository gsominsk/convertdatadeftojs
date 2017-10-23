module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCountryCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fWeekStart: { public: true, type: 'INTEGER' },
     WeekVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fYear: { public: true, type: 'INTEGER' },
           fFirstDayofW1: { public: true, type: 'DATE' },
           fNrOffWeeks: { public: true, type: 'INTEGER' } } } },
  indexes: { CountryCodeIndex163: { fields: [ 'fCountryCode' ], indicesType: 'UNIQUE' } } }