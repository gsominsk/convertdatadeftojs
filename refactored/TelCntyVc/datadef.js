module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fZone: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex390: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }