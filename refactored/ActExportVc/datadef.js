module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fActSerNr: { public: true, type: 'INTEGER' },
     fPerson: { public: true, type: 'TEXT' },
     fICalUID: { public: true, type: 'TEXT' },
     fLastExportDate: { public: true, type: 'DATE' } },
  indexes: { ActPersIndex115: { fields: [ 'fActSerNr', 'fPerson' ], indicesType: 'UNIQUE' } } }