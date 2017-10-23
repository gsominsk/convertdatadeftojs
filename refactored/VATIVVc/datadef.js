module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fIVNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fInvAddr3: { public: true, type: 'TEXT' },
     fInvAddr4: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fClientContact: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fCreateDate: { public: true, type: 'DATE' },
     fIVPayDate: { public: true, type: 'DATE' },
     fIVInvDate: { public: true, type: 'DATE' },
     fIVTransDate: { public: true, type: 'DATE' },
     fPrntdf: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fInvType: { public: true, type: 'INTEGER' },
     fCredInv: { public: true, type: 'INTEGER' },
     fObjects: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fInvComment: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fFrPrice: { public: true, type: 'FLOAT' },
     fFrBase: { public: true, type: 'FLOAT' },
     fFrItem: { public: true, type: 'TEXT' },
     fFrVATCode: { public: true, type: 'TEXT' },
     fFrObjects: { public: true, type: 'TEXT' },
     fFrGP: { public: true, type: 'FLOAT' },
     fFrGPPercent: { public: true, type: 'FLOAT' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fBaseSum4: { public: true, type: 'FLOAT' },
     fDiscPerc: { public: true, type: 'FLOAT' },
     fDiscSum: { public: true, type: 'FLOAT' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fCommision: { public: true, type: 'FLOAT' },
     fSumIncCom: { public: true, type: 'FLOAT' },
     fVATNr: { public: true, type: 'TEXT' },
     fFrSalesAcc: { public: true, type: 'TEXT' },
     fCustVATCode: { public: true, type: 'TEXT' },
     fCalcFinRef: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fExportedFlag: { public: true, type: 'INTEGER' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fInvoiceNr: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'TEXT' },
     fFiscalFlag: { public: true, type: 'INTEGER' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fTAX2Sum: { public: true, type: 'FLOAT' },
     fBankCode: { public: true, type: 'TEXT' },
     VATIVVcMatrix: 
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
           fPriceFactor: { public: true, type: 'FLOAT' },
           fFIFORowVal: { public: true, type: 'FLOAT' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fSalesAcc: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fSpec: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' },
           fCUPNr: { public: true, type: 'INTEGER' },
           fCuAccCode: { public: true, type: 'TEXT' },
           fPeriodCode: { public: true, type: 'TEXT' },
           fOrdRow: { public: true, type: 'INTEGER' },
           fIVRow: { public: true, type: 'INTEGER' },
           fSign: { public: true, type: 'TEXT' },
           fOldTransDate: { public: true, type: 'DATE' },
           fTAX2Code: { public: true, type: 'TEXT' },
           fTAX2Prc: { public: true, type: 'FLOAT' },
           fTAX2Reb: { public: true, type: 'FLOAT' },
           fTAX1Reb: { public: true, type: 'FLOAT' },
           fTAX2Acc: { public: true, type: 'TEXT' },
           fMotherArtCode: { public: true, type: 'TEXT' },
           fRecipeQuant: { public: true, type: 'FLOAT' },
           fRvrsVATCode: { public: true, type: 'TEXT' } } },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fTotalwoTAX: { public: true, type: 'INTEGER' },
     fIPNr: { public: true, type: 'INTEGER' },
     fIPRow: { public: true, type: 'INTEGER' },
     fCUPNr: { public: true, type: 'INTEGER' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fInvalid: { public: true, type: 'INTEGER' },
     fInvalidDate: { public: true, type: 'DATE' },
     fVATIVType: { public: true, type: 'TEXT' },
     fOriginalAtOurCompany: { public: true, type: 'TEXT' },
     fMonthSeqNr: { public: true, type: 'INTEGER' },
     fCorrectionReason: { public: true, type: 'TEXT' },
     fORCONr: { public: true, type: 'INTEGER' },
     fInvalidTime: { public: true, type: 'TIME' },
     fOfficialSerNrSerie: { public: true, type: 'TEXT' },
     fIVServiceDelDate: { public: true, type: 'DATE' },
     fRvrsVAT: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex324: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }