module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFromCU: { public: true, type: 'TEXT' },
     fToCU: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex474: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }