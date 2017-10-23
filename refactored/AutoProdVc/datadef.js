module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromItemCode: { public: true, type: 'TEXT' },
     fToItemCode: { public: true, type: 'TEXT' },
     fUnitCoefficient: { public: true, type: 'FLOAT' },
     fDefault: { public: true, type: 'INTEGER' } },
  indexes: { FromItemCodeIndex539: { fields: [ 'fFromItemCode' ], indicesType: 'UNIQUE' } } }