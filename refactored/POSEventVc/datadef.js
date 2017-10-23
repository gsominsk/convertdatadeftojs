module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fDrawer: { public: true, type: 'TEXT' },
     fMachineName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fEvent: { public: true, type: 'INTEGER' },
     fNLTransDone: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fMembers: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex404: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }