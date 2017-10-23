module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fDrawer: { public: true, type: 'TEXT' },
     fMachineName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fBal: { public: true, type: 'FLOAT' },
     fNLTransDone: { public: true, type: 'INTEGER' },
     fAccSales: { public: true, type: 'FLOAT' },
     fReportingDate: { public: true, type: 'DATE' } },
  indexes: { SerNrIndex405: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }