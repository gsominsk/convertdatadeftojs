module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     DaughterCompBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCompCode: { public: true, type: 'TEXT' },
           fCompName: { public: true, type: 'TEXT' },
           fTCPIP: { public: true, type: 'TEXT' },
           fPort: { public: true, type: 'TEXT' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' } } } } }