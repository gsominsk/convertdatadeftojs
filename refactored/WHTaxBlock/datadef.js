module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     WHTaxBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fAccNumber: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fCertificateNr: { public: true, type: 'INTEGER' },
           fWHTax: { public: true, type: 'TEXT' },
           fWHCalcForm: { public: true, type: 'TEXT' },
           fAccNumbers: { public: true, type: 'TEXT' },
           fDocName: { public: true, type: 'TEXT' },
           fTaxCode: { public: true, type: 'TEXT' },
           fPostOPWHTax: { public: true, type: 'INTEGER' },
           fBaseMin: { public: true, type: 'FLOAT' },
           fTmpAccNumber: { public: true, type: 'TEXT' },
           fTaxRules: { public: true, type: 'TEXT' },
           fPayMode: { public: true, type: 'TEXT' },
           fLastCertificateNr: { public: true, type: 'INTEGER' } } } } }