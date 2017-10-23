module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CUDocTypeBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDocType: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fTaxCode: { public: true, type: 'TEXT' } } } } }