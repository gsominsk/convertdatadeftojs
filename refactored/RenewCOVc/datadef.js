module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromClas: { public: true, type: 'TEXT' },
     fToClas: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fReplaceInvoiceToCust: { public: true, type: 'INTEGER' },
     fPeriodLength: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex275: { fields: [ 'fFromClas' ], indicesType: 'UNIQUE' } } }