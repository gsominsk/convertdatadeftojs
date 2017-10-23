module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     TaxAuthIDBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTSerStart: { public: true, type: 'INTEGER' },
           fTSerEnd: { public: true, type: 'INTEGER' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fComment: { public: true, type: 'TEXT' },
           fTaxAuthID: { public: true, type: 'TEXT' },
           fDosageKey: { public: true, type: 'TEXT' },
           fBranchID: { public: true, type: 'TEXT' } } } } }