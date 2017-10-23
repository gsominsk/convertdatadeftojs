module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fOrdDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     ORVcMatrix: 
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
           fSalesAcc: { public: true, type: 'TEXT' },
           fShipd1: { public: true, type: 'FLOAT' },
           fShipd2: { public: true, type: 'FLOAT' },
           fInvd: { public: true, type: 'FLOAT' },
           fObjects: { public: true, type: 'TEXT' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fRowGP: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' },
           fRecepy: { public: true, type: 'TEXT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fPriceFactor: { public: true, type: 'FLOAT' },
           fVARList: { public: true, type: 'TEXT' },
           fLocation: { public: true, type: 'TEXT' },
           fSource: { public: true, type: 'TEXT' },
           fPickingDate: { public: true, type: 'DATE' },
           fPickingTime: { public: true, type: 'TEXT' },
           fInloadingDate: { public: true, type: 'DATE' },
           fInloadingTime: { public: true, type: 'TEXT' },
           fDespatchRowDate: { public: true, type: 'DATE' },
           fDespatchRowTime: { public: true, type: 'TEXT' },
           fPlanShipRow: { public: true, type: 'TEXT' },
           fShipNote: { public: true, type: 'TEXT' },
           fUnitCode: { public: true, type: 'TEXT' },
           fUnitFactQuant: { public: true, type: 'FLOAT' },
           fUnitFactPrice: { public: true, type: 'FLOAT' },
           fUnitXval: { public: true, type: 'FLOAT' },
           fUnitYval: { public: true, type: 'FLOAT' },
           fUnitZval: { public: true, type: 'FLOAT' },
           fCoefficient: { public: true, type: 'FLOAT' },
           fVECode: { public: true, type: 'TEXT' },
           fProduction: { public: true, type: 'TEXT' },
           fGroupOrdRow: { public: true, type: 'INTEGER' },
           fTAX2Code: { public: true, type: 'TEXT' },
           fTAX2Prc: { public: true, type: 'FLOAT' },
           fTAX2Reb: { public: true, type: 'FLOAT' },
           fTAX1Reb: { public: true, type: 'FLOAT' },
           fTAX2Acc: { public: true, type: 'TEXT' },
           fPlanShipRowDate: { public: true, type: 'DATE' },
           fCUServiceHistNr: { public: true, type: 'INTEGER' },
           fCUServiceUntilDate: { public: true, type: 'DATE' },
           fPosition: { public: true, type: 'TEXT' },
           fRowOrderType: { public: true, type: 'INTEGER' },
           fTaxTemplateCode: { public: true, type: 'TEXT' },
           fTaxMatrix: { public: true, type: 'TEXT' },
           fRegion: { public: true, type: 'TEXT' },
           fPerceptions: { public: true, type: 'INTEGER' },
           fMotherArtCode: { public: true, type: 'TEXT' },
           fRecipeQuant: { public: true, type: 'FLOAT' },
           fCustArtCode: { public: true, type: 'TEXT' },
           fSalesmen: { public: true, type: 'TEXT' },
           fOrderType: { public: true, type: 'INTEGER' },
           fUnitComment: { public: true, type: 'TEXT' },
           fDiscApprovedBy: { public: true, type: 'TEXT' },
           fServiceDelDate: { public: true, type: 'DATE' },
           fRvrsVATCode: { public: true, type: 'TEXT' } } },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fCustContact: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fInvFlag: { public: true, type: 'INTEGER' },
     fShipFlag: { public: true, type: 'INTEGER' },
     fPrntdf: { public: true, type: 'INTEGER' },
     fPayDeal: { public: true, type: 'TEXT' },
     fCustCat: { public: true, type: 'TEXT' },
     fInvMark: { public: true, type: 'INTEGER' },
     fShipMark: { public: true, type: 'INTEGER' },
     fObjects: { public: true, type: 'TEXT' },
     fShipMode: { public: true, type: 'TEXT' },
     fOrderStatus: { public: true, type: 'INTEGER' },
     fPlanShip: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fShipDeal: { public: true, type: 'TEXT' },
     fShipAddr0: { public: true, type: 'TEXT' },
     fShipAddr1: { public: true, type: 'TEXT' },
     fShipAddr2: { public: true, type: 'TEXT' },
     fShipAddr3: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fInvoiceToCode: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fBuildOn: { public: true, type: 'INTEGER' },
     fPRCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fInvOnlyOnFull: { public: true, type: 'INTEGER' },
     fDownPaySent: { public: true, type: 'FLOAT' },
     fDownPayRedcd: { public: true, type: 'FLOAT' },
     fOrderClass: { public: true, type: 'TEXT' },
     fCustOrdNr: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fReserved: { public: true, type: 'INTEGER' },
     fOSFlag: { public: true, type: 'INTEGER' },
     fLocation: { public: true, type: 'TEXT' },
     fCustVATCode: { public: true, type: 'TEXT' },
     fRebCode: { public: true, type: 'TEXT' },
     fVATNr: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fExportedFlag: { public: true, type: 'INTEGER' },
     fBaseSum4: { public: true, type: 'FLOAT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fDiscPerc: { public: true, type: 'FLOAT' },
     fDiscSum: { public: true, type: 'FLOAT' },
     fTotGP: { public: true, type: 'FLOAT' },
     fProbability: { public: true, type: 'FLOAT' },
     fCreditCard: { public: true, type: 'TEXT' },
     fAuthorizationCode: { public: true, type: 'TEXT' },
     fGPProc: { public: true, type: 'FLOAT' },
     fDespatchDate: { public: true, type: 'DATE' },
     fDespatchTime: { public: true, type: 'TIME' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fTotWeight: { public: true, type: 'FLOAT' },
     fTotVolume: { public: true, type: 'FLOAT' },
     fCommision: { public: true, type: 'FLOAT' },
     fSumIncCom: { public: true, type: 'FLOAT' },
     fFrPrice: { public: true, type: 'FLOAT' },
     fFrBase: { public: true, type: 'FLOAT' },
     fFrItem: { public: true, type: 'TEXT' },
     fFrVATCode: { public: true, type: 'TEXT' },
     fFrObjects: { public: true, type: 'TEXT' },
     fInvAddr3: { public: true, type: 'TEXT' },
     fInvAddr4: { public: true, type: 'TEXT' },
     fDelAddr3: { public: true, type: 'TEXT' },
     fDelAddr4: { public: true, type: 'TEXT' },
     fDelAddrCode: { public: true, type: 'TEXT' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fQuoteNr: { public: true, type: 'INTEGER' },
     fInvBeforeShip: { public: true, type: 'INTEGER' },
     fColnr: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fPlanShipDate: { public: true, type: 'DATE' },
     fPrepaidAmount: { public: true, type: 'FLOAT' },
     fRegion: { public: true, type: 'TEXT' },
     fRefStr: { public: true, type: 'TEXT' },
     fGroupOrdNr: { public: true, type: 'INTEGER' },
     fNoDelivery: { public: true, type: 'INTEGER' },
     fNoInvoice: { public: true, type: 'INTEGER' },
     fTAX2Sum: { public: true, type: 'FLOAT' },
     fNoTax1: { public: true, type: 'INTEGER' },
     fNoTax2: { public: true, type: 'INTEGER' },
     fBranchID: { public: true, type: 'TEXT' },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fTotalwoTAX: { public: true, type: 'INTEGER' },
     fOrderType: { public: true, type: 'INTEGER' },
     fAcceptanceStatus: { public: true, type: 'INTEGER' },
     fCustTaxTemplateCode: { public: true, type: 'TEXT' },
     fTaxMatrix: { public: true, type: 'TEXT' },
     fTerminalID: { public: true, type: 'TEXT' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fHash: { public: true, type: 'TEXT' },
     fHashKeyVersion: { public: true, type: 'INTEGER' },
     fRegDate: { public: true, type: 'DATE' },
     fRegTime: { public: true, type: 'TIME' },
     fLocalMachineCode: { public: true, type: 'TEXT' },
     fInvCountry: { public: true, type: 'TEXT' },
     fDelCountry: { public: true, type: 'TEXT' },
     fTREONr: { public: true, type: 'INTEGER' },
     fTREOExpDate: { public: true, type: 'DATE' },
     fORCONr: { public: true, type: 'INTEGER' },
     fAcceptanceBy: { public: true, type: 'TEXT' },
     fAcceptanceFYI: { public: true, type: 'TEXT' },
     fBankCode: { public: true, type: 'TEXT' },
     fInvCountryName: { public: true, type: 'TEXT' },
     fDelCountryName: { public: true, type: 'TEXT' },
     fOfficialSerNrSerie: { public: true, type: 'TEXT' },
     fRecipientGLN: { public: true, type: 'TEXT' },
     fDelRecipientGLN: { public: true, type: 'TEXT' },
     fIntrastatTransCode: { public: true, type: 'TEXT' },
     fComment2: { public: true, type: 'TEXT' },
     fComment3: { public: true, type: 'TEXT' },
     fComment4: { public: true, type: 'TEXT' },
     fPONr: { public: true, type: 'INTEGER' },
     fCompNr: { public: true, type: 'INTEGER' },
     fOYNr: { public: true, type: 'INTEGER' },
     fOYDescription: { public: true, type: 'TEXT' },
     fSHShipSetToZero: { public: true, type: 'INTEGER' },
     fRvrsVAT: { public: true, type: 'FLOAT' },
     fPromotionCodes: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex91: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }