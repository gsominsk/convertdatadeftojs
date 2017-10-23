module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fLocalMachineCode: { public: true, type: 'TEXT' },
     fDrawerCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex828: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }