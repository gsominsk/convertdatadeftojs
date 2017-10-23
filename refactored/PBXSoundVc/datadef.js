module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fQueue: { public: true, type: 'TEXT' },
     fEvent: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex827: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }