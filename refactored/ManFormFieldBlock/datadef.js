module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ManFormFieldBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDocType: { public: true, type: 'INTEGER' },
           fFieldSetNr: { public: true, type: 'INTEGER' } } } } }