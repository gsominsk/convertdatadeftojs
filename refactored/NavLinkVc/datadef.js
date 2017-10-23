module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fWindowName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fLinkComm: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex210: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }