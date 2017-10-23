module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     NPTSNewCUFieldsBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFieldName: { public: true, type: 'TEXT' },
           fEditState: { public: true, type: 'INTEGER' },
           fLabel: { public: true, type: 'TEXT' } } } } }