module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     VATCodeControlBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fTaxTemplateCode: { public: true, type: 'TEXT' },
           fAccounts: { public: true, type: 'TEXT' } } } } }