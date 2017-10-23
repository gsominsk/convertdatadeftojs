module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fRecordNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' } },
  indexes: { SerNrIndex859: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }