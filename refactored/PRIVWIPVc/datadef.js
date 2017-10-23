module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fInvNr: { public: true, type: 'INTEGER' },
     fWIPAcc: { public: true, type: 'TEXT' },
     fWIPBalAcc: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' },
     fPRCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex662: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }