module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PeriodBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFromDate: { public: true, type: 'DATE' },
           fToDate: { public: true, type: 'DATE' },
           fCodeStr: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } } }