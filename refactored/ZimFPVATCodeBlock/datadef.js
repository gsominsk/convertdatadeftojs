module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ZimFPVATCodeBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fDepartment: { public: true, type: 'INTEGER' } } } } }