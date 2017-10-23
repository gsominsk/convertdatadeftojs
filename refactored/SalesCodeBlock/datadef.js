module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     SalesCodeBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fX1: { public: true, type: 'TEXT' },
           fX2: { public: true, type: 'TEXT' },
           fSalesAccDom: { public: true, type: 'TEXT' },
           fSalesAccEU: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fX3: { public: true, type: 'TEXT' },
           fSalesAccExp: { public: true, type: 'TEXT' } } } } }