module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LegalCLInNrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPurchDate: { public: true, type: 'DATE' },
           fSerie: { public: true, type: 'TEXT' },
           fTSerStart: { public: true, type: 'TEXT' },
           fTSerEnd: { public: true, type: 'TEXT' },
           fTSerCom: { public: true, type: 'TEXT' },
           fCClass: { public: true, type: 'TEXT' } } } } }