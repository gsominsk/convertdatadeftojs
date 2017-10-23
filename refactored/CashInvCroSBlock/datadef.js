module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CashInvCroSBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fNormalVAT: { public: true, type: 'INTEGER' } } } } }