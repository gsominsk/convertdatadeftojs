module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     OldVATCodeBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fExVatpr: { public: true, type: 'FLOAT' },
           fIncVatpr: { public: true, type: 'FLOAT' },
           fSalesVATAcc: { public: true, type: 'TEXT' },
           fPurchVATAcc: { public: true, type: 'TEXT' },
           fTax1pr: { public: true, type: 'FLOAT' },
           fTax1Acc: { public: true, type: 'TEXT' },
           fPayPurchVATAcc: { public: true, type: 'TEXT' },
           fPaySalesVATAcc: { public: true, type: 'TEXT' },
           fExcludeFromOfficial: { public: true, type: 'INTEGER' },
           fCorSalesVATAcc: { public: true, type: 'TEXT' },
           fCorPurchVATAcc: { public: true, type: 'TEXT' },
           fTax1OppAcc: { public: true, type: 'TEXT' } } } } }