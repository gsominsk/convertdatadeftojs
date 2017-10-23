module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSignature: { public: true, type: 'TEXT' },
     fFunctionType: { public: true, type: 'INTEGER' },
     fCostType: { public: true, type: 'INTEGER' },
     fAmountorQty: { public: true, type: 'INTEGER' },
     fOverviewType: { public: true, type: 'INTEGER' },
     fShowBy: { public: true, type: 'INTEGER' },
     fDownpaymentType: { public: true, type: 'INTEGER' },
     fShowContactInfo: { public: true, type: 'INTEGER' },
     fSubProjects: { public: true, type: 'INTEGER' },
     fNotOKAct: { public: true, type: 'INTEGER' },
     fAmountinCurrency: { public: true, type: 'INTEGER' },
     fInclProjectInvoicing: { public: true, type: 'INTEGER' },
     fDefArtMode: { public: true, type: 'INTEGER' },
     fDetailedOnly: { public: true, type: 'INTEGER' },
     fInclPrice: { public: true, type: 'INTEGER' },
     fShowItemDescriptionBudget: { public: true, type: 'INTEGER' },
     fRetention: { public: true, type: 'INTEGER' },
     fDownpayment: { public: true, type: 'INTEGER' },
     fQuotations: { public: true, type: 'INTEGER' },
     fQuoteClass: { public: true, type: 'TEXT' },
     fNrOfQT: { public: true, type: 'FLOAT' },
     fInvoiceActive: { public: true, type: 'INTEGER' },
     fNotOKVI: { public: true, type: 'INTEGER' },
     fInvoiceCount: { public: true, type: 'INTEGER' },
     fActivities: { public: true, type: 'INTEGER' },
     fNotDoneAct: { public: true, type: 'INTEGER' },
     fNrOfAct: { public: true, type: 'FLOAT' } },
  indexes: { SignatureIndex822: { fields: [ 'fSignature' ], indicesType: 'UNIQUE' } } }