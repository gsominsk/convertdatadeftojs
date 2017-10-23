module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     IVSerBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTSerStart: { public: true, type: 'INTEGER' },
           fTSerEnd: { public: true, type: 'INTEGER' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fTSerCom: { public: true, type: 'TEXT' },
           fDonotGenTrans: { public: true, type: 'INTEGER' } } } } }