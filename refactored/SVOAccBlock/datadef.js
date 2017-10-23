module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSalesAcc: { public: true, type: 'TEXT' },
     fStockAcc: { public: true, type: 'TEXT' },
     fServiceAcc: { public: true, type: 'TEXT' },
     fSVOText: { public: true, type: 'INTEGER' },
     fInvoiceSVO: { public: true, type: 'INTEGER' },
     fWSHeaderObjectOnSVOIV: { public: true, type: 'INTEGER' },
     fWSUpdStockFlag: { public: true, type: 'INTEGER' },
     fAllowOneMainItem: { public: true, type: 'INTEGER' } } }