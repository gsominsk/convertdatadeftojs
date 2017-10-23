module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTaxID: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     TaxTemplateVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fVATRate: { public: true, type: 'FLOAT' },
           fCalcBase: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex692: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }