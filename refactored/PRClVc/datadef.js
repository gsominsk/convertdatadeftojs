module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCType: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex542: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }