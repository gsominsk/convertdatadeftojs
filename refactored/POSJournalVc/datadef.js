module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fUserCode: { public: true, type: 'TEXT' },
     fLocalMachineCode: { public: true, type: 'TEXT' },
     fDrawerCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fAction: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fRowNr: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fQuant: { public: true, type: 'FLOAT' },
     fPrice: { public: true, type: 'FLOAT' },
     fOvst: { public: true, type: 'INTEGER' },
     fTerminalID: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex863: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }