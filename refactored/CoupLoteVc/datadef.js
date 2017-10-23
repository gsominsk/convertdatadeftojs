module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fBatchNr: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fMachineName: { public: true, type: 'TEXT' },
     fNrLiq: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fCardType: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex294: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }