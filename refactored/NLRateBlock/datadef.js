module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRateGainAcc: { public: true, type: 'TEXT' },
     fRateLossAcc: { public: true, type: 'TEXT' },
     fLimit: { public: true, type: 'FLOAT' } } }