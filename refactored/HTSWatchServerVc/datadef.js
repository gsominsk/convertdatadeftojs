module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fVATNr: { public: true, type: 'TEXT' },
     fPINCode: { public: true, type: 'TEXT' },
     fRegNr1: { public: true, type: 'TEXT' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fHost: { public: true, type: 'TEXT' },
     fPort: { public: true, type: 'INTEGER' },
     fInterval: { public: true, type: 'INTEGER' },
     fCUCodeInHansaMail: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex509: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }