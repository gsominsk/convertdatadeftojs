module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustID: { public: true, type: 'TEXT' },
     fCustSerNr: { public: true, type: 'INTEGER' },
     fVersionNr: { public: true, type: 'INTEGER' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fCompID: { public: true, type: 'TEXT' },
     fCYVATNr: { public: true, type: 'TEXT' },
     fCYANACode: { public: true, type: 'TEXT' },
     fCYCompName: { public: true, type: 'TEXT' },
     fCYAddr0: { public: true, type: 'TEXT' },
     fCYAddr1: { public: true, type: 'TEXT' },
     fCYAddr2: { public: true, type: 'TEXT' },
     fCYAddr3: { public: true, type: 'TEXT' },
     fCYCountryCode: { public: true, type: 'TEXT' },
     fCYRegNr1: { public: true, type: 'TEXT' },
     fCYRegNr2: { public: true, type: 'TEXT' },
     fCYeMail: { public: true, type: 'TEXT' },
     fCYPhone: { public: true, type: 'TEXT' },
     fCYFax: { public: true, type: 'TEXT' },
     fCYBank1: { public: true, type: 'TEXT' },
     fCYBank2: { public: true, type: 'TEXT' },
     fCYBankCode: { public: true, type: 'TEXT' },
     fCYwwwAddr: { public: true, type: 'TEXT' },
     fCYHomeCommunity: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fVATNr: { public: true, type: 'TEXT' },
     fRegNr1: { public: true, type: 'TEXT' },
     fRegNr2: { public: true, type: 'TEXT' },
     fANACode: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fAddr4: { public: true, type: 'TEXT' },
     fAddr5: { public: true, type: 'TEXT' },
     fShipMode: { public: true, type: 'TEXT' },
     fShipDeal: { public: true, type: 'TEXT' },
     fShipAddr0: { public: true, type: 'TEXT' },
     fShipAddr1: { public: true, type: 'TEXT' },
     fShipAddr2: { public: true, type: 'TEXT' },
     fShipAddr3: { public: true, type: 'TEXT' },
     fShipAddr4: { public: true, type: 'TEXT' },
     fShipAddr5: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fInvType: { public: true, type: 'INTEGER' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fCredInv: { public: true, type: 'INTEGER' },
     fQTNr: { public: true, type: 'INTEGER' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fCustOrdNr: { public: true, type: 'TEXT' },
     fSVONr: { public: true, type: 'INTEGER' },
     fJobNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fInvDate: { public: true, type: 'DATE' },
     fPayDate: { public: true, type: 'DATE' },
     fServiceDelDate: { public: true, type: 'DATE' },
     fPayDeal: { public: true, type: 'TEXT' },
     fPdComment: { public: true, type: 'TEXT' },
     fPdays: { public: true, type: 'INTEGER' },
     fPdvrebt: { public: true, type: 'FLOAT' },
     fPdrdays: { public: true, type: 'INTEGER' },
     fPdvrebt2: { public: true, type: 'FLOAT' },
     fPdrdays2: { public: true, type: 'INTEGER' },
     fIntCode: { public: true, type: 'TEXT' },
     fCalcFinRef: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fClientContact: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fEMail: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fBaseSum4: { public: true, type: 'FLOAT' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fTAX2Sum: { public: true, type: 'FLOAT' },
     fFrPrice: { public: true, type: 'FLOAT' },
     fFrBase: { public: true, type: 'FLOAT' },
     fFrItem: { public: true, type: 'TEXT' },
     fFrVATCode: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fTotWeight: { public: true, type: 'FLOAT' },
     fTotVolume: { public: true, type: 'FLOAT' },
     fStatVal: { public: true, type: 'FLOAT' },
     fCredMark: { public: true, type: 'TEXT' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fOrgCust: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fInvComment: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fSalesMan: { public: true, type: 'TEXT' },
     fEInvoiceAccount: { public: true, type: 'TEXT' },
     fFiscalFlag: { public: true, type: 'INTEGER' },
     fTransTime: { public: true, type: 'TIME' },
     fRegion: { public: true, type: 'TEXT' },
     fRefStr: { public: true, type: 'TEXT' },
     fNoTax1: { public: true, type: 'INTEGER' },
     fNoTax2: { public: true, type: 'INTEGER' },
     fToPayAfterDiscount: { public: true, type: 'FLOAT' },
     fToPayAfterDiscount2: { public: true, type: 'FLOAT' },
     fPrntdf: { public: true, type: 'INTEGER' },
     fInvoiceNr: { public: true, type: 'TEXT' },
     fEInvExpFlag: { public: true, type: 'INTEGER' },
     fEInvExpDate: { public: true, type: 'DATE' },
     fHeader0: { public: true, type: 'TEXT' },
     fHeader1: { public: true, type: 'TEXT' },
     fHeader2: { public: true, type: 'TEXT' },
     fFooter0: { public: true, type: 'TEXT' },
     fFooter1: { public: true, type: 'TEXT' },
     fFooter2: { public: true, type: 'TEXT' },
     fFooter3: { public: true, type: 'TEXT' },
     fFooter4: { public: true, type: 'TEXT' },
     fFooter5: { public: true, type: 'TEXT' },
     fFooter6: { public: true, type: 'TEXT' },
     fFooter7: { public: true, type: 'TEXT' },
     fFooter8: { public: true, type: 'TEXT' },
     fFooter9: { public: true, type: 'TEXT' },
     fNotPaidFlag: { public: true, type: 'INTEGER' },
     fShipDealComment: { public: true, type: 'TEXT' },
     fShipModeComment: { public: true, type: 'TEXT' },
     fVECustID: { public: true, type: 'TEXT' },
     fTheirCode: { public: true, type: 'TEXT' },
     fDBID: { public: true, type: 'TEXT' },
     fCompNr: { public: true, type: 'INTEGER' },
     HTSVIVcMatrix: 
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
           fOrdRow: { public: true, type: 'INTEGER' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fUnitCode: { public: true, type: 'TEXT' },
           fVATPrc: { public: true, type: 'FLOAT' },
           fCUPNr: { public: true, type: 'INTEGER' },
           fVATSum: { public: true, type: 'FLOAT' },
           fCuAccCode: { public: true, type: 'TEXT' },
           fTAX2Prc: { public: true, type: 'FLOAT' },
           fPriceFactor: { public: true, type: 'FLOAT' },
           fExciseNr: { public: true, type: 'TEXT' },
           fPeriodCode: { public: true, type: 'TEXT' },
           fVECode: { public: true, type: 'TEXT' },
           fGCNr: { public: true, type: 'INTEGER' },
           fCustOrdNr: { public: true, type: 'TEXT' },
           fRepaExVAT: { public: true, type: 'FLOAT' },
           fTAX2Code: { public: true, type: 'TEXT' },
           fTAX2Reb: { public: true, type: 'FLOAT' },
           fTAX1Reb: { public: true, type: 'FLOAT' },
           fItemType: { public: true, type: 'TEXT' },
           fBarcode: { public: true, type: 'TEXT' },
           fAlternativeCode: { public: true, type: 'TEXT' },
           fBestBefore: { public: true, type: 'DATE' },
           fPlanShipRow: { public: true, type: 'TEXT' },
           fUnitText: { public: true, type: 'TEXT' },
           fCreditedRow: { public: true, type: 'INTEGER' },
           fServiceDelDate: { public: true, type: 'DATE' },
           fComment: { public: true, type: 'TEXT' },
           fTaxTemplateCode: { public: true, type: 'TEXT' },
           fVATType: { public: true, type: 'INTEGER' },
           fINItemType: { public: true, type: 'INTEGER' },
           fCostAcc: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' } } },
     fCYSWIFT: { public: true, type: 'TEXT' },
     fCYIBAN: { public: true, type: 'TEXT' },
     fOCRReference: { public: true, type: 'TEXT' },
     fOCRReferenceCheckSum: { public: true, type: 'TEXT' },
     fUseOCRReference: { public: true, type: 'INTEGER' },
     fCYBankName: { public: true, type: 'TEXT' },
     fEInvoiceAccount2: { public: true, type: 'TEXT' },
     fCYEInvoiceAccount: { public: true, type: 'TEXT' },
     fCYEInvoiceAccount2: { public: true, type: 'TEXT' },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fTotalwoTAX: { public: true, type: 'INTEGER' },
     fTXTransDate: { public: true, type: 'DATE' },
     fCYAddr4: { public: true, type: 'TEXT' },
     fVETaxTemplateCode: { public: true, type: 'TEXT' },
     fTXTransTime: { public: true, type: 'TIME' },
     fCYCostAccForNonStocked: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex508: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }