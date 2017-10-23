module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fEventType: { public: true, type: 'TEXT' },
     fRoute: { public: true, type: 'TEXT' },
     fRelatedf: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex341: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }