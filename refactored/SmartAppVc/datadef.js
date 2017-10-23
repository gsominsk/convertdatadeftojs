module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fName: { public: true, type: 'TEXT' },
     fIcon: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex566: { fields: [ 'fName' ], indicesType: 'UNIQUE' } } }