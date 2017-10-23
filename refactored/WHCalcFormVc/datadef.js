module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPayCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTaxCalc: { public: true, type: 'INTEGER' },
     fBaseCalcVAT: { public: true, type: 'INTEGER' },
     fBaseCalcNet: { public: true, type: 'INTEGER' },
     fBaseCalcExTax: { public: true, type: 'INTEGER' },
     fNoTaxAmount: { public: true, type: 'FLOAT' },
     fMinAmount: { public: true, type: 'FLOAT' },
     WHCalcFormVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFrom: { public: true, type: 'FLOAT' },
           fTo: { public: true, type: 'FLOAT' },
           fPercent: { public: true, type: 'FLOAT' },
           fFixAmount: { public: true, type: 'FLOAT' },
           fMinAmount: { public: true, type: 'FLOAT' },
           fBaseAmount: { public: true, type: 'FLOAT' } } } },
  indexes: { PayCodeIndex480: { fields: [ 'fPayCode' ], indicesType: 'UNIQUE' } } }