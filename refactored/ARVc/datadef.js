module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInvoiceNr: { public: true, type: 'INTEGER' },
     fRVal: { public: true, type: 'FLOAT' },
     fDueDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fARRebDate: { public: true, type: 'DATE' },
     fARCurncyCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fBookRVal: { public: true, type: 'FLOAT' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fARRebDate2: { public: true, type: 'DATE' },
     fInvDate: { public: true, type: 'DATE' } },
  indexes: { InvoiceNrIndex18: { fields: [ 'fInvoiceNr' ], indicesType: 'UNIQUE' } } }