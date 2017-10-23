module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fRegister: { public: true, type: 'INTEGER' },
     fNrSeries: { public: true, type: 'INTEGER' },
     fRateGainAcc: { public: true, type: 'TEXT' },
     fRateLossAcc: { public: true, type: 'TEXT' },
     fLimit: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' },
     NLRateVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccNumber: { public: true, type: 'TEXT' },
           fType: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex478: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }