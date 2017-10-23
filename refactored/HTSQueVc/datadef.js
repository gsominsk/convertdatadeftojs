module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fCustRecSerNr: { public: true, type: 'INTEGER' },
     fCustID: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fFileNameDesc: { public: true, type: 'TEXT' },
     fCreationDate: { public: true, type: 'DATE' },
     fCreationTime: { public: true, type: 'TIME' },
     fCompID: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex456: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }