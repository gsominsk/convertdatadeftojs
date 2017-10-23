module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMsgID: { public: true, type: 'TEXT' },
     fErrorCode: { public: true, type: 'INTEGER' },
     fErrorDescription: { public: true, type: 'TEXT' },
     fHTSCUServiceErrorCode: { public: true, type: 'INTEGER' },
     fHTSCUServiceErrorDescription: { public: true, type: 'TEXT' },
     fCountdownClicks: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'TEXT' },
     fVersion: { public: true, type: 'TEXT' },
     fFuncVersion: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex577: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }