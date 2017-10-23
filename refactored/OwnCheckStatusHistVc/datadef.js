module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCheckSerNr: { public: true, type: 'INTEGER' },
     fCheckNr: { public: true, type: 'TEXT' },
     fOpenf: { public: true, type: 'INTEGER' },
     fStatusDate: { public: true, type: 'DATE' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex800: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }