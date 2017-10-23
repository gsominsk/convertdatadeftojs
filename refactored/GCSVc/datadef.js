module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fAmount: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' },
     fExpiryDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' },
     fInvSerNr: { public: true, type: 'INTEGER' },
     fBarCode: { public: true, type: 'TEXT' },
     fBalance: { public: true, type: 'FLOAT' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex417: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }