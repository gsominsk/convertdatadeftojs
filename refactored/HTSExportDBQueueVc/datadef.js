module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fEmail: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fExportSessionID: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fVersion: { public: true, type: 'INTEGER' },
     fSubVersion: { public: true, type: 'INTEGER' },
     fProgramType: { public: true, type: 'INTEGER' },
     fProductCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex645: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }