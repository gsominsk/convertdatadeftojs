module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     EInvoiceLayoutBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fHeader0: { public: true, type: 'TEXT' },
           fHeader1: { public: true, type: 'TEXT' },
           fHeader2: { public: true, type: 'TEXT' },
           fFooter0: { public: true, type: 'TEXT' },
           fFooter1: { public: true, type: 'TEXT' },
           fFooter2: { public: true, type: 'TEXT' },
           fPrintLayout: { public: true, type: 'TEXT' } } } } }