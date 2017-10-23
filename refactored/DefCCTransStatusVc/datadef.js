module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransNr: { public: true, type: 'INTEGER' },
     fProcessed: { public: true, type: 'INTEGER' },
     fProcTransDate: { public: true, type: 'DATE' },
     fProcTransTime: { public: true, type: 'TIME' },
     fAuthorizationCode: { public: true, type: 'TEXT' },
     fCCTransID: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex759: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }