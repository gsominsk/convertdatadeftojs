module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'INTEGER' },
     fItem: { public: true, type: 'TEXT' },
     fQuant: { public: true, type: 'FLOAT' },
     fSpec: { public: true, type: 'TEXT' },
     fVATCode: { public: true, type: 'TEXT' },
     fPrice: { public: true, type: 'FLOAT' },
     fVRebate: { public: true, type: 'FLOAT' },
     fSum: { public: true, type: 'FLOAT' },
     fInvNr: { public: true, type: 'INTEGER' },
     fRowNr: { public: true, type: 'INTEGER' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fInvTime: { public: true, type: 'INTEGER' },
     fAgreementNr: { public: true, type: 'INTEGER' },
     fXxNotUsedDate: { public: true, type: 'TEXT' },
     fFrDate: { public: true, type: 'DATE' },
     fToDate: { public: true, type: 'DATE' },
     fOrigItem: { public: true, type: 'TEXT' },
     fOrigSerialNr: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fXxNotUsedEndDate: { public: true, type: 'TEXT' },
     fSubSerNr: { public: true, type: 'INTEGER' },
     fSite: { public: true, type: 'TEXT' },
     fCustOrdNr: { public: true, type: 'TEXT' },
     fItemQuant: { public: true, type: 'FLOAT' },
     fMinCharge: { public: true, type: 'INTEGER' },
     fPONumber: { public: true, type: 'INTEGER' },
     fGRNumber: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex369: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }