module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fStockItem: { public: true, type: 'INTEGER' },
     fAllowSO: { public: true, type: 'INTEGER' },
     fAllowPO: { public: true, type: 'INTEGER' },
     fAllowTS: { public: true, type: 'INTEGER' },
     fPlainItemPricing: { public: true, type: 'INTEGER' } } }