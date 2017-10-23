module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fVECode: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     CalcChargeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fCalcVal: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex101: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }