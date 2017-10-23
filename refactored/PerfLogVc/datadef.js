module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fUser: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fServerDelay: { public: true, type: 'INTEGER' },
     fTotalDelay: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex427: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }