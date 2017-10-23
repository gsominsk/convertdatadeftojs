module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RusTaxComBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFieldCode: { public: true, type: 'TEXT' },
           fFieldData: { public: true, type: 'TEXT' },
           fFieldSpec: { public: true, type: 'TEXT' },
           fSCLassName: { public: true, type: 'TEXT' } } } } }