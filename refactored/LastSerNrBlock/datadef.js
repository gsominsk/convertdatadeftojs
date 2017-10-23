module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LastSerNrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLocalMachineCode: { public: true, type: 'TEXT' },
           fLastIVCashNr: { public: true, type: 'INTEGER' } } } } }