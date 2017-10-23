module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'TEXT' },
     fPich: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex196: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }