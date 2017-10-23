module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDisallowStockMov: { public: true, type: 'INTEGER' },
     fDisallowSD: { public: true, type: 'INTEGER' },
     fDisallowPO: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex180: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }