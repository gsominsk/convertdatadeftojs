module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LCMLevelSetBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFromPoints: { public: true, type: 'FLOAT' },
           fToPoints: { public: true, type: 'FLOAT' },
           fLCMLevel: { public: true, type: 'TEXT' },
           fPLCode: { public: true, type: 'TEXT' },
           fRebCode: { public: true, type: 'TEXT' } } } } }