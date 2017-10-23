module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDNPayDeal: { public: true, type: 'TEXT' },
     fBouncedArtCode: { public: true, type: 'TEXT' },
     fUseBatchDeposit: { public: true, type: 'INTEGER' },
     fCancelledArtCode: { public: true, type: 'TEXT' },
     fBankFeeArtCode: { public: true, type: 'TEXT' } } }