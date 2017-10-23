module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fName: { public: true, type: 'TEXT' },
     fUpdatingf: { public: true, type: 'INTEGER' },
     fRemotef: { public: true, type: 'INTEGER' },
     fLevel: { public: true, type: 'INTEGER' },
     fApp: { public: true, type: 'TEXT' },
     fCode: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex633: { fields: [ 'fName' ], indicesType: 'UNIQUE' } } }