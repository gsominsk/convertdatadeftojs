module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fFreeCode: { public: true, type: 'TEXT' },
     fDaysinYear: { public: true, type: 'INTEGER' },
     fRndTotal: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex57: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }