module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LocationAccBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLocation: { public: true, type: 'TEXT' },
           fPurchAcc: { public: true, type: 'TEXT' },
           fEUPurchAcc: { public: true, type: 'TEXT' },
           fExpPurchAcc: { public: true, type: 'TEXT' },
           fCostAcc: { public: true, type: 'TEXT' },
           fEUCostAcc: { public: true, type: 'TEXT' },
           fExpCostAcc: { public: true, type: 'TEXT' },
           fSalesAcc: { public: true, type: 'TEXT' },
           fEUSalesAcc: { public: true, type: 'TEXT' },
           fExpSalesAcc: { public: true, type: 'TEXT' } } } } }