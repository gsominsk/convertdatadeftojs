module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PipelinOverviewBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fViewName: { public: true, type: 'TEXT' },
           fColumnName: { public: true, type: 'TEXT' },
           fRegister: { public: true, type: 'TEXT' },
           fRegisterFilter: { public: true, type: 'TEXT' },
           fAmounts: { public: true, type: 'INTEGER' },
           fRegisterFilter2: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' } } } } }