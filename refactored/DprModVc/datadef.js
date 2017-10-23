module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fDeprMethod: { public: true, type: 'INTEGER' },
     fDeprPerc: { public: true, type: 'FLOAT' },
     fDeprRnd: { public: true, type: 'INTEGER' },
     fDeprPeriod: { public: true, type: 'INTEGER' },
     fLifecycleYears: { public: true, type: 'INTEGER' },
     fLifecycleDays: { public: true, type: 'INTEGER' },
     fDeprCalc: { public: true, type: 'INTEGER' },
     DprModVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLifecycleYear: { public: true, type: 'INTEGER' },
           fYearPerc: { public: true, type: 'FLOAT' },
           fYearCoef: { public: true, type: 'FLOAT' },
           fYearCoefifRev: { public: true, type: 'FLOAT' } } },
     fDeprMethod2: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex143: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }