module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     FVImpFilterBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFilterStr: { public: true, type: 'TEXT' },
           fActionType: { public: true, type: 'INTEGER' },
           fOnAccAcc: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' } } } } }