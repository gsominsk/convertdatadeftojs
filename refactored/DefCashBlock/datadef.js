module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDefCashPayMode: { public: true, type: 'TEXT' },
     fDefCCPayMode: { public: true, type: 'TEXT' },
     fDefGCSPayMode: { public: true, type: 'TEXT' },
     fDefGCRPayMode: { public: true, type: 'TEXT' },
     fDefGCSVATCode: { public: true, type: 'TEXT' },
     fDefGCRVATCode: { public: true, type: 'TEXT' },
     fDefCashPayDeal: { public: true, type: 'TEXT' } } }