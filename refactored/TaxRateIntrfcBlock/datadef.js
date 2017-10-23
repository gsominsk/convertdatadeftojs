module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUsername: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fEnable: { public: true, type: 'INTEGER' },
     fLogCommunication: { public: true, type: 'INTEGER' },
     fSalesVATAcc: { public: true, type: 'TEXT' },
     fPurchVATAcc: { public: true, type: 'TEXT' } } }