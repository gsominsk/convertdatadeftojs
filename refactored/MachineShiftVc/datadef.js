module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMachineID: { public: true, type: 'TEXT' },
     MachineShiftVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStartTime: { public: true, type: 'TIME' },
           fEndTime: { public: true, type: 'TIME' },
           fRepeatCnt: { public: true, type: 'INTEGER' } } } },
  indexes: { MachineIDIndex792: { fields: [ 'fMachineID' ], indicesType: 'UNIQUE' } } }