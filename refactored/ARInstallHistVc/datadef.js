module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInvoiceNr: { public: true, type: 'INTEGER' },
     fRVal: { public: true, type: 'FLOAT' },
     fDueDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fARCurncyCode: { public: true, type: 'TEXT' },
     fBookRVal: { public: true, type: 'FLOAT' },
     fInstallNr: { public: true, type: 'INTEGER' } },
  indexes: { InvoiceNrIndex22: { fields: [ 'fInvoiceNr', 'fDueDate' ], indicesType: 'UNIQUE' } } }