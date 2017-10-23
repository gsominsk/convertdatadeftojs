module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCLOutNr: { public: true, type: 'INTEGER' },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex320: 
      { fields: [ 'fCLOutNr', 'fSerNr', 'fFileName' ],
        indicesType: 'UNIQUE' } } }