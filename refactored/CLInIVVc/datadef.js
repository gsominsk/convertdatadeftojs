module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCLInNr: { public: true, type: 'INTEGER' },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex319: 
      { fields: [ 'fCLInNr', 'fSerNr', 'fFileName' ],
        indicesType: 'UNIQUE' } } }