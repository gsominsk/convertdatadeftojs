module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDefaultValidDays: { public: true, type: 'INTEGER' },
     fReqQTClass: { public: true, type: 'INTEGER' },
     fDisallowInvoicemorethanQuoted: { public: true, type: 'INTEGER' },
     fReqRejectDate: { public: true, type: 'INTEGER' } } }