module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fProject: { public: true, type: 'TEXT' },
     fStockItem: { public: true, type: 'INTEGER' },
     fAllowSO: { public: true, type: 'INTEGER' },
     fAllowPO: { public: true, type: 'INTEGER' },
     fAllowTS: { public: true, type: 'INTEGER' },
     fPlainItemPricing: { public: true, type: 'INTEGER' } },
  indexes: { ItemCodeIndex165: { fields: [ 'fItemCode', 'fProject' ], indicesType: 'UNIQUE' } } }