module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex402: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }