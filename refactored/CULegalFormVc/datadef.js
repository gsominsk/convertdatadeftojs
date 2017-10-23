module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTaxCalcBase: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex804: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }