module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInBounceAcc: { public: true, type: 'TEXT' },
     fOutBounceAcc: { public: true, type: 'TEXT' },
     fOwnBounceAcc: { public: true, type: 'TEXT' },
     fBounceChargeAcc: { public: true, type: 'TEXT' },
     fReconClearCheck: { public: true, type: 'INTEGER' },
     fGenCoupons: { public: true, type: 'INTEGER' },
     fPostVATfromBounceCheck: { public: true, type: 'INTEGER' },
     fPostVATfromBounceOwnCheck: { public: true, type: 'INTEGER' } } }