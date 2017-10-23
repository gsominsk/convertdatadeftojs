module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RusTaxLastNrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fYearN: { public: true, type: 'INTEGER' },
           fLastNr: { public: true, type: 'INTEGER' } } } } }