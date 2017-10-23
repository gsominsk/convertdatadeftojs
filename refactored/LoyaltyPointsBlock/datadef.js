module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LoyaltyPointsBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLCMLevel: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fRndTo: { public: true, type: 'INTEGER' },
           fPoints: { public: true, type: 'FLOAT' } } } } }