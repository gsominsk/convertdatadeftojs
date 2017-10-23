module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fCurrencyCode: { public: true, type: 'TEXT' },
     fVATCode: { public: true, type: 'TEXT' } } }