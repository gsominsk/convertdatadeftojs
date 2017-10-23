module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocalMachine: { public: true, type: 'TEXT' },
     LocalMachineLoginVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' },
           fOnLoginWindow: { public: true, type: 'INTEGER' } } } },
  indexes: { LocalMachineIndex538: { fields: [ 'fLocalMachine' ], indicesType: 'UNIQUE' } } }