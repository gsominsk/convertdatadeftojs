module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     KeyAllowNewBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fProgType: { public: true, type: 'INTEGER' },
           fMinimum: { public: true, type: 'TEXT' },
           fStartDate: { public: true, type: 'DATE' },
           fVersionInfo: { public: true, type: 'TEXT' } } } } }