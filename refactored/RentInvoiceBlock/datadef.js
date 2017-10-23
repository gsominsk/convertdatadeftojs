module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInvoiceBase: { public: true, type: 'INTEGER' },
     fIncludeOriginalItem: { public: true, type: 'INTEGER' },
     fIncludePeriod: { public: true, type: 'INTEGER' },
     fAddEmptyLine: { public: true, type: 'INTEGER' },
     fUseAsQty: { public: true, type: 'INTEGER' },
     fGroupInvoice: { public: true, type: 'INTEGER' },
     fIncludeSite: { public: true, type: 'INTEGER' },
     fInclCustOrdNr: { public: true, type: 'INTEGER' },
     fInclRentResNo: { public: true, type: 'INTEGER' },
     fOnePerReservation: { public: true, type: 'INTEGER' } } }