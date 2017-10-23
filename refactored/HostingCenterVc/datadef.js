module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fRegService: { public: true, type: 'TEXT' },
     fConnService: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex628: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }