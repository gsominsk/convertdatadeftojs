module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     UnitVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fVolWeighFact: { public: true, type: 'FLOAT' },
     fQtyFact: { public: true, type: 'FLOAT' },
     fAllowDim: { public: true, type: 'INTEGER' },
     fCheckDim: { public: true, type: 'INTEGER' },
     fCalcDimQty: { public: true, type: 'INTEGER' },
     fTaxOfficeCode: { public: true, type: 'TEXT' },
     fConventionalSign: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex146: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }