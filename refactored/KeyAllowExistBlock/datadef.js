module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     KeyAllowExistBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fProgType: { public: true, type: 'INTEGER' },
           fMinimum: { public: true, type: 'TEXT' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fVersionInfo: { public: true, type: 'TEXT' } } } } }