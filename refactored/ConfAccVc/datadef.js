module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAccLevel: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex195: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }