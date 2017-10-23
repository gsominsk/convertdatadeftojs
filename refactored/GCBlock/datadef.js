module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fExpiryMonths: { public: true, type: 'INTEGER' },
     fLoyaltyPointsUsageType: { public: true, type: 'INTEGER' } } }