module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fTimeClass: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     TBPLDefVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fITCode: { public: true, type: 'TEXT' },
           fPriceFormula: { public: true, type: 'TEXT' },
           fCostFormula: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex75: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }