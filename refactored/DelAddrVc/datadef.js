module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fDelCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDelAddr0: { public: true, type: 'TEXT' },
     fDelAddr1: { public: true, type: 'TEXT' },
     fDelAddr2: { public: true, type: 'TEXT' },
     fDelAddr3: { public: true, type: 'TEXT' },
     fDelAddr4: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fContact: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fEmail: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fInvoiceBase: { public: true, type: 'INTEGER' },
     fIncludeOriginalItem: { public: true, type: 'INTEGER' },
     fIncludePeriod: { public: true, type: 'INTEGER' },
     fAddEmptyLine: { public: true, type: 'INTEGER' },
     fUseAsQty: { public: true, type: 'INTEGER' },
     fGroupInvoice: { public: true, type: 'INTEGER' },
     fIncludeSite: { public: true, type: 'INTEGER' },
     fInclCustOrdNr: { public: true, type: 'INTEGER' },
     fInclRentResNo: { public: true, type: 'INTEGER' },
     fOnePerReservation: { public: true, type: 'INTEGER' },
     fTaxTemplateCode: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'TEXT' },
     fDelCountry: { public: true, type: 'TEXT' },
     fFreightCode: { public: true, type: 'TEXT' },
     fVATCode: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fRecipientGLN: { public: true, type: 'TEXT' },
     fRecipientDepartment: { public: true, type: 'TEXT' } },
  indexes: { DelCodeIndex88: { fields: [ 'fDelCode', 'fCustCode' ], indicesType: 'UNIQUE' } } }