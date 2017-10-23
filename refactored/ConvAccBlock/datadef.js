module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ConvAccBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fOldAcc: { public: true, type: 'TEXT' },
           fNewAcc: { public: true, type: 'TEXT' },
           fOldVATCode: { public: true, type: 'TEXT' },
           fNewVATCode: { public: true, type: 'TEXT' } } } } }