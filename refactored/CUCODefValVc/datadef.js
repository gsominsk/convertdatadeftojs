module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fPerType: { public: true, type: 'INTEGER' },
     fPerLength: { public: true, type: 'INTEGER' },
     fInvDtype: { public: true, type: 'INTEGER' },
     fInvDays: { public: true, type: 'INTEGER' },
     fNormalFactor: { public: true, type: 'FLOAT' },
     fContractClass: { public: true, type: 'TEXT' },
     fDetailInvoice: { public: true, type: 'INTEGER' },
     fRemindersNr: { public: true, type: 'INTEGER' } },
  indexes: { CustCodeIndex274: { fields: [ 'fCustCode' ], indicesType: 'UNIQUE' } } }