module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fVECode: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fQuant: { public: true, type: 'FLOAT' },
     fArtName: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fIVNr: { public: true, type: 'INTEGER' },
     fIVRow: { public: true, type: 'INTEGER' },
     fORNr: { public: true, type: 'INTEGER' },
     fSHNr: { public: true, type: 'INTEGER' },
     fSHRow: { public: true, type: 'INTEGER' },
     fBuyBackNr: { public: true, type: 'TEXT' },
     fBuyBackPrice: { public: true, type: 'FLOAT' },
     fOrgPrice: { public: true, type: 'FLOAT' },
     fActualCredit: { public: true, type: 'FLOAT' },
     fActualDebit: { public: true, type: 'FLOAT' },
     fBBVarAcc: { public: true, type: 'TEXT' },
     fVINr: { public: true, type: 'INTEGER' },
     fCredVINr: { public: true, type: 'INTEGER' },
     fInvdFlag: { public: true, type: 'INTEGER' },
     fVATCode: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fOrgVINr: { public: true, type: 'INTEGER' },
     fOrgVIRow: { public: true, type: 'INTEGER' },
     fOrgInvoiceNr: { public: true, type: 'TEXT' },
     fCommision: { public: true, type: 'FLOAT' },
     fVEInvoiceNr: { public: true, type: 'TEXT' },
     fVECredInvoiceNr: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fReconciled: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex632: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }