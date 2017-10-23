module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocation: { public: true, type: 'TEXT' },
     fLCMLevel: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' },
     fPoints: { public: true, type: 'FLOAT' },
     LocLoyPointsRedeemVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fITCode: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fPoints: { public: true, type: 'FLOAT' } } } },
  indexes: { LocationIndex737: { fields: [ 'fLocation', 'fLCMLevel' ], indicesType: 'UNIQUE' } } }