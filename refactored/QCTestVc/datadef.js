module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fQCUnit: { public: true, type: 'TEXT' },
     fDimension: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex621: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }