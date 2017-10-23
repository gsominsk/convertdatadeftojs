module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fRecSerNr: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fFileNameDesc: { public: true, type: 'TEXT' },
     fCreationDate: { public: true, type: 'DATE' },
     fCreationTime: { public: true, type: 'TIME' },
     fCompID: { public: true, type: 'TEXT' },
     fRecVersionNr: { public: true, type: 'INTEGER' },
     fTXReceived: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex453: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }