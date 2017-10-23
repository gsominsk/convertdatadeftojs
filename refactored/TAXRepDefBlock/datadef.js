module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     TAXRepDefBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTaxRepCode: { public: true, type: 'TEXT' },
           fFPCode: { public: true, type: 'TEXT' } } } } }