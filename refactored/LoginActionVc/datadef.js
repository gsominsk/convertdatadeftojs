module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fUsers: { public: true, type: 'TEXT' },
     fAction: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex805: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }