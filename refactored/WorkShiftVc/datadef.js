module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMonday: { public: true, type: 'INTEGER' },
     fTuesday: { public: true, type: 'INTEGER' },
     fWednesday: { public: true, type: 'INTEGER' },
     fThursday: { public: true, type: 'INTEGER' },
     fFriday: { public: true, type: 'INTEGER' },
     fSaturday: { public: true, type: 'INTEGER' },
     fSunday: { public: true, type: 'INTEGER' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' } },
  indexes: { CodeIndex587: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }