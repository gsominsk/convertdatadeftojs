module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fShortDesc: { public: true, type: 'TEXT' },
     fComment1: { public: true, type: 'TEXT' },
     fComment2: { public: true, type: 'TEXT' },
     fComment3: { public: true, type: 'TEXT' },
     fClassification: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex187: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }