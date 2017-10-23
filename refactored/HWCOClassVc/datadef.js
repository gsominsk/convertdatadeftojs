module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClType: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex746: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }