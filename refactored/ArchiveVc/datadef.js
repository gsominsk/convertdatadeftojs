module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFolderName: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex193: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }