module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RegDefBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRegNo2: { public: true, type: 'TEXT' },
           fSalesVATCode: { public: true, type: 'TEXT' },
           fPurchVATCode: { public: true, type: 'TEXT' },
           fLangCode: { public: true, type: 'TEXT' },
           fOfficialTaxCode: { public: true, type: 'TEXT' },
           fDocType: { public: true, type: 'TEXT' },
           fTaxCode: { public: true, type: 'TEXT' } } } } }