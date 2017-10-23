module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEmailOverdueInvoice: { public: true, type: 'INTEGER' },
     fOverdueDays: { public: true, type: 'INTEGER' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fCClass: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' } } }