module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     VARMaskBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFrItem: { public: true, type: 'TEXT' },
           fToItem: { public: true, type: 'TEXT' },
           fItemSize: { public: true, type: 'TEXT' },
           fVARMask: { public: true, type: 'TEXT' },
           fVARRepOrder: { public: true, type: 'TEXT' },
           fVARSubsets: { public: true, type: 'TEXT' },
           fItemGroup: { public: true, type: 'TEXT' } } } } }