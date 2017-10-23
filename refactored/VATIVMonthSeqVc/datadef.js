module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fIntMonth: { public: true, type: 'INTEGER' },
     fLastUsedNr: { public: true, type: 'INTEGER' } },
  indexes: { IntMonthIndex749: { fields: [ 'fIntMonth' ], indicesType: 'UNIQUE' } } }