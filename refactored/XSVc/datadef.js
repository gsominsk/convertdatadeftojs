module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     XSVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFromFileName: { public: true, type: 'TEXT' },
           fXSerNr: { public: true, type: 'INTEGER' },
           fCurncyCode: { public: true, type: 'TEXT' },
           fToRateB1: { public: true, type: 'FLOAT' },
           fItem: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' },
           fGP: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fRow: { public: true, type: 'INTEGER' },
           fFrRate: { public: true, type: 'FLOAT' },
           fToRateB2: { public: true, type: 'FLOAT' },
           fBaseRate1: { public: true, type: 'FLOAT' },
           fBaseRate2: { public: true, type: 'FLOAT' } } } },
  indexes: { MainIndex126: { fields: [ 'fFileName', 'fSerNr' ], indicesType: 'UNIQUE' } } }