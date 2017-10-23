module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fHidePrices: { public: true, type: 'INTEGER' },
     fShowStockLevel: { public: true, type: 'INTEGER' },
     fShopBaskCheckOut: { public: true, type: 'INTEGER' },
     fPayTypeCreditCard: { public: true, type: 'INTEGER' },
     fPayTypeOrder: { public: true, type: 'INTEGER' },
     fPayTypeInvoice: { public: true, type: 'INTEGER' },
     fPayDealCreditCard: { public: true, type: 'TEXT' },
     fPayDealOrder: { public: true, type: 'TEXT' },
     fPayDealInvoice: { public: true, type: 'TEXT' },
     fInfoElCreditCard: { public: true, type: 'TEXT' },
     fInfoElOrder: { public: true, type: 'TEXT' },
     fInfoElInvoice: { public: true, type: 'TEXT' },
     fPayTypePaypal: { public: true, type: 'INTEGER' },
     fPayDealPaypal: { public: true, type: 'TEXT' },
     fInfoElPaypal: { public: true, type: 'TEXT' },
     fPayModeCreditCard: { public: true, type: 'TEXT' },
     fPayModePayPal: { public: true, type: 'TEXT' },
     fShowDelModes: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex317: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }