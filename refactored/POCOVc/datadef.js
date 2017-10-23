module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fVECode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fPayDeal: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fShipAddr0: { public: true, type: 'TEXT' },
     fShipAddr1: { public: true, type: 'TEXT' },
     fShipAddr2: { public: true, type: 'TEXT' },
     fShipAddr3: { public: true, type: 'TEXT' },
     fVEContact: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fShipMode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fPlanShip: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fShipDeal: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     POCOVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fOvst: { public: true, type: 'INTEGER' },
           fVEArtCode: { public: true, type: 'TEXT' },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fPrice: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fVRebate: { public: true, type: 'FLOAT' },
           fVATCode: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fOrdered: { public: true, type: 'FLOAT' },
           fVEQuant: { public: true, type: 'FLOAT' },
           fPIFactor: { public: true, type: 'FLOAT' },
           fPriceFactor: { public: true, type: 'FLOAT' },
           fVARList: { public: true, type: 'TEXT' },
           fCostAcc: { public: true, type: 'TEXT' },
           fPlanShipRow: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fVINr: { public: true, type: 'INTEGER' },
           fCalcFormulae: { public: true, type: 'TEXT' } } },
     fInclVAT: { public: true, type: 'INTEGER' },
     fLocation: { public: true, type: 'TEXT' },
     fVEFactoring: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fObjects: { public: true, type: 'TEXT' },
     fReference: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fOKPersons: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fInvAddr3: { public: true, type: 'TEXT' },
     fInvAddr4: { public: true, type: 'TEXT' },
     fDelAddr3: { public: true, type: 'TEXT' },
     fDelAddr4: { public: true, type: 'TEXT' },
     fComment1: { public: true, type: 'TEXT' },
     fComment2: { public: true, type: 'TEXT' },
     fComment3: { public: true, type: 'TEXT' },
     fComment4: { public: true, type: 'TEXT' },
     fPOClass: { public: true, type: 'TEXT' },
     fPlanShipDate: { public: true, type: 'DATE' },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fInvoiceToCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex300: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }