module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fPerson: { public: true, type: 'TEXT' },
     fPersonName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fTotal: { public: true, type: 'FLOAT' },
     CostUserVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fObject: { public: true, type: 'TEXT' },
           fCost: { public: true, type: 'FLOAT' } } } },
  indexes: { SerNrIndex438: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }