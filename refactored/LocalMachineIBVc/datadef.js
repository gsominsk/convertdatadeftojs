module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocalMachine: { public: true, type: 'TEXT' },
     LocalMachineIBVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLabel: { public: true, type: 'TEXT' },
           fArtCode: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' },
           fTileNr: { public: true, type: 'INTEGER' },
           fButtonType: { public: true, type: 'INTEGER' } } } },
  indexes: { LocalMachineIndex536: { fields: [ 'fLocalMachine' ], indicesType: 'UNIQUE' } } }