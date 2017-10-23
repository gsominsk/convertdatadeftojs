module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRevLossAcc: { public: true, type: 'TEXT' },
     fCapInvAcc: { public: true, type: 'TEXT' },
     fRevCostAcc: { public: true, type: 'TEXT' },
     fSalesTransitAcc: { public: true, type: 'TEXT' },
     fAssetNew: { public: true, type: 'INTEGER' },
     fAssetSold: { public: true, type: 'INTEGER' },
     fModel: { public: true, type: 'INTEGER' },
     fSMType: { public: true, type: 'INTEGER' },
     fLastMonthDispDprCalc: { public: true, type: 'INTEGER' },
     fPostWrofTrans: { public: true, type: 'INTEGER' },
     fSetAssetDepStartDate: { public: true, type: 'INTEGER' },
     fRequireAssetNumberonVI: { public: true, type: 'INTEGER' } } }