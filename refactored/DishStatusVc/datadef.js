module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSpec: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex824: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }