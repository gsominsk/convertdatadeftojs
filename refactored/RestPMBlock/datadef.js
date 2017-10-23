module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RestPMBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPMCode: { public: true, type: 'TEXT' },
           fMachineName: { public: true, type: 'TEXT' },
           fButtonType: { public: true, type: 'INTEGER' },
           fLabel: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' },
           fRowstp: { public: true, type: 'INTEGER' },
           fDrawers: { public: true, type: 'TEXT' },
           fCardType: { public: true, type: 'INTEGER' },
           fCurncyCode: { public: true, type: 'TEXT' } } } } }