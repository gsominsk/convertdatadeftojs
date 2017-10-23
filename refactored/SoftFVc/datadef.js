module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fInvoiceToCode: { public: true, type: 'TEXT' },
     fPRCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fCustVATCode: { public: true, type: 'TEXT' },
     fRebCode: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fLocation: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     SoftFVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fPrice: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fVRebate: { public: true, type: 'FLOAT' },
           fObjects: { public: true, type: 'TEXT' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fVATCode: { public: true, type: 'TEXT' },
           fPlanShip: { public: true, type: 'TEXT' },
           fSpec: { public: true, type: 'TEXT' },
           fRowGP: { public: true, type: 'FLOAT' },
           fPosition: { public: true, type: 'TEXT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fTransDate: { public: true, type: 'DATE' },
           fLocation: { public: true, type: 'TEXT' } } },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fTotalwoTAX: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fSelectedRow: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex423: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }