module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTrunkNr: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex395: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }