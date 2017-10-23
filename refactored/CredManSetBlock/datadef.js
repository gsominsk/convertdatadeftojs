module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInstalmentRoundOff: { public: true, type: 'INTEGER' },
     fRateRoundOff: { public: true, type: 'INTEGER' },
     fInvDay: { public: true, type: 'INTEGER' },
     fCredManAcc: { public: true, type: 'TEXT' },
     fARAcc: { public: true, type: 'TEXT' },
     fDepositItem: { public: true, type: 'TEXT' },
     fInstalmentItem: { public: true, type: 'TEXT' },
     fRateItem: { public: true, type: 'TEXT' },
     fLateFeeItem: { public: true, type: 'TEXT' },
     fLateRateItem: { public: true, type: 'TEXT' },
     fDefaultType: { public: true, type: 'TEXT' },
     fDepositRoundOff: { public: true, type: 'INTEGER' } } }