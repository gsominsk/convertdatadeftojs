module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LoyPointRedeemBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLCMLevel: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fPoints: { public: true, type: 'FLOAT' } } } } }