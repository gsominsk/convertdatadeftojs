module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex571: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }