module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMachine: { public: true, type: 'TEXT' },
     fMachineName: { public: true, type: 'TEXT' },
     fFromOperation: { public: true, type: 'TEXT' },
     fToOperation: { public: true, type: 'TEXT' },
     fFromRoute: { public: true, type: 'TEXT' },
     fToRoute: { public: true, type: 'TEXT' },
     fCoef: { public: true, type: 'FLOAT' },
     fClosedf: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex785: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }