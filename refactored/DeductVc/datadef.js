module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fEmplCode: { public: true, type: 'TEXT' },
     fEmplName: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex231: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }