module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex678: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }