module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDaysBeforef: { public: true, type: 'INTEGER' },
     fNoDaysBefore: { public: true, type: 'INTEGER' },
     fColourBefore: { public: true, type: 'INTEGER' },
     fDaysAfterf: { public: true, type: 'INTEGER' },
     fNoDaysAfter: { public: true, type: 'INTEGER' },
     fColourAfter: { public: true, type: 'INTEGER' },
     fCreateInspAfterf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex347: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }