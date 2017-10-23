module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fQuantity: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex309: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }