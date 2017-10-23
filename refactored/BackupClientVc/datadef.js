module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fOpenf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex674: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }