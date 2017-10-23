module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex394: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }