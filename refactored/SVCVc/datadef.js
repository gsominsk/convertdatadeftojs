module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fWeekends: { public: true, type: 'INTEGER' },
     fDaysFromStart: { public: true, type: 'INTEGER' },
     SVCVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fActType: { public: true, type: 'TEXT' },
           fMainPersons: { public: true, type: 'TEXT' },
           fCCPersons: { public: true, type: 'TEXT' },
           fNrOfTimes: { public: true, type: 'INTEGER' },
           fDaysBetween: { public: true, type: 'INTEGER' },
           fTodoFlag: { public: true, type: 'INTEGER' },
           fSymbNr: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex377: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }