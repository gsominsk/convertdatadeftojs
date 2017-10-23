module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDBIDCode: { public: true, type: 'TEXT' },
     SynkDBIDRegVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFileName: { public: true, type: 'TEXT' },
           fFrom: { public: true, type: 'INTEGER' },
           fTo: { public: true, type: 'INTEGER' },
           fLastNumber: { public: true, type: 'INTEGER' } } },
     fLastSeenDate: { public: true, type: 'DATE' },
     fLastSeenTime: { public: true, type: 'TIME' },
     fLocalMachineCode: { public: true, type: 'TEXT' } },
  indexes: { DBIDCodeIndex618: { fields: [ 'fDBIDCode' ], indicesType: 'UNIQUE' } } }