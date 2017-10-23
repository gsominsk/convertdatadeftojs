module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fElecInvFormat: { public: true, type: 'INTEGER' },
     fIBANCode: { public: true, type: 'TEXT' },
     fEInvAddr: { public: true, type: 'TEXT' },
     fStoreInFolder: { public: true, type: 'TEXT' },
     fSWIFT: { public: true, type: 'TEXT' } } }