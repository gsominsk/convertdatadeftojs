module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fRcvInvoicePref: { public: true, type: 'INTEGER' },
     fStopEInvoices: { public: true, type: 'INTEGER' },
     fEInvoiceAccount: { public: true, type: 'TEXT' },
     fPostage: { public: true, type: 'INTEGER' },
     fEInvoiceAccount2: { public: true, type: 'TEXT' },
     fAttachPDFtoElectronicInvoice: { public: true, type: 'INTEGER' },
     fRcvToCompanyCode: { public: true, type: 'TEXT' },
     fEMail: { public: true, type: 'TEXT' },
     fRecipientGLN: { public: true, type: 'TEXT' },
     fRcvInvoicePref2: { public: true, type: 'INTEGER' },
     fShortNote: { public: true, type: 'INTEGER' },
     fAttachFInvoicetoEInv: { public: true, type: 'INTEGER' } },
  indexes: { CustCodeIndex483: { fields: [ 'fCustCode' ], indicesType: 'UNIQUE' } } }