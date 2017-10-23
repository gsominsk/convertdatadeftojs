module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransRow: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fOKTransDate: { public: true, type: 'DATE' },
     fOKTransTime: { public: true, type: 'TIME' },
     fType: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fMainSerialNr: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex760: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }