module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ConvCustClassBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fOldCode: { public: true, type: 'TEXT' },
           fNewCode: { public: true, type: 'TEXT' } } } } }