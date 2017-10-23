module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMachineCode: { public: true, type: 'TEXT' },
     fLastDBID: { public: true, type: 'TEXT' },
     ClientSyncProgressVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVcname: { public: true, type: 'TEXT' },
           fLastAckSeq: { public: true, type: 'INTEGER' } } } },
  indexes: { MachineCodeIndex743: { fields: [ 'fMachineCode' ], indicesType: 'UNIQUE' } } }