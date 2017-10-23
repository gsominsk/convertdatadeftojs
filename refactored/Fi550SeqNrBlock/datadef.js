module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     Fi550SeqNrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLocalMachineCode: { public: true, type: 'TEXT' },
           fFileName: { public: true, type: 'TEXT' },
           fSeqNr: { public: true, type: 'INTEGER' } } } } }