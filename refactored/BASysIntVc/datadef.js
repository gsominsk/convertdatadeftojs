module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fTriger: { public: true, type: 'TEXT' },
     fAction: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fActType: { public: true, type: 'TEXT' },
     fSMSNumbers: { public: true, type: 'TEXT' },
     fSystemMobile: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex526: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }