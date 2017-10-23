module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fDispGroups: { public: true, type: 'TEXT' },
     fCType: { public: true, type: 'TEXT' },
     fColnr: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex382: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }