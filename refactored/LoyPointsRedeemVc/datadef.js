module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLCMLevel: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' },
     fPoints: { public: true, type: 'FLOAT' },
     LoyPointsRedeemVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fITCode: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fPoints: { public: true, type: 'FLOAT' } } } },
  indexes: { LCMLevelIndex736: { fields: [ 'fLCMLevel' ], indicesType: 'UNIQUE' } } }