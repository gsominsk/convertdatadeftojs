module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' },
     fErr: { public: true, type: 'INTEGER' },
     fErrmsg: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex585: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }