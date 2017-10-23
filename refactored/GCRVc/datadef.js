module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fAmount: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' },
     fExpiryDate: { public: true, type: 'DATE' },
     fBarCode: { public: true, type: 'TEXT' },
     fInvSerNr: { public: true, type: 'INTEGER' },
     fGCSSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex418: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }