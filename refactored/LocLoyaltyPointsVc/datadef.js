module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocation: { public: true, type: 'TEXT' },
     fLCMLevel: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' },
     fRndTo: { public: true, type: 'INTEGER' },
     fPoints: { public: true, type: 'FLOAT' },
     fMinAmount: { public: true, type: 'FLOAT' },
     LocLoyaltyPointsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fITCode: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fRndTo: { public: true, type: 'INTEGER' },
           fPoints: { public: true, type: 'FLOAT' } } } },
  indexes: { LocationIndex735: { fields: [ 'fLocation', 'fLCMLevel' ], indicesType: 'UNIQUE' } } }