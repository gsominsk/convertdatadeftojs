module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fURL: { public: true, type: 'TEXT' },
     fOpenType: { public: true, type: 'INTEGER' },
     fDescription: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex656: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }