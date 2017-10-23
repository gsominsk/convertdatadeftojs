module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fExtNo: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex393: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }