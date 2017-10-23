module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fInvDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     IVVcMatrix: 
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
           fObjects: { public: true, type: 'TEXT' },
           fOrdRow: { public: true, type: 'INTEGER' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fRowGP: { public: true, type: 'FLOAT' },
           fFIFO: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' },
           fRecepy: { public: true, type: 'TEXT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fPriceFactor: { public: true, type: 'FLOAT' },
           fVARList: { public: true, type: 'TEXT' },
           fCUPNr: { public: true, type: 'INTEGER' },
           fFIFORowVal: { public: true, type: 'FLOAT' },
           fCoefficient: { public: true, type: 'FLOAT' },
           fCuAccCode: { public: true, type: 'TEXT' },
           fExciseNr: { public: true, type: 'TEXT' },
           fPeriodCode: { public: true, type: 'TEXT' },
           fUnitCode: { public: true, type: 'TEXT' },
           fUnitFactQuant: { public: true, type: 'FLOAT' },
           fUnitFactPrice: { public: true, type: 'FLOAT' },
           fUnitXval: { public: true, type: 'FLOAT' },
           fUnitYval: { public: true, type: 'FLOAT' },
           fUnitZval: { public: true, type: 'FLOAT' },
           fVECode: { public: true, type: 'TEXT' },
           fCreditCard: { public: true, type: 'TEXT' },
           fAuthorizationCode: { public: true, type: 'TEXT' },
           fPosCode: { public: true, type: 'TEXT' },
           fCurncyCode: { public: true, type: 'TEXT' },
           fFrRate: { public: true, type: 'FLOAT' },
           fToRateB1: { public: true, type: 'FLOAT' },
           fToRateB2: { public: true, type: 'FLOAT' },
           fBaseRate1: { public: true, type: 'FLOAT' },
           fBaseRate2: { public: true, type: 'FLOAT' },
           fPayMode: { public: true, type: 'TEXT' },
           fGCNr: { public: true, type: 'INTEGER' },
           fCustOrdNr: { public: true, type: 'TEXT' },
           fRepaExVAT: { public: true, type: 'FLOAT' },
           fBasePriceB2: { public: true, type: 'FLOAT' },
           fTAX2Code: { public: true, type: 'TEXT' },
           fTAX2Prc: { public: true, type: 'FLOAT' },
           fTAX2Reb: { public: true, type: 'FLOAT' },
           fTAX1Reb: { public: true, type: 'FLOAT' },
           fTAX2Acc: { public: true, type: 'TEXT' },
           fCreditedRow: { public: true, type: 'INTEGER' },
           fNotUpdStockFlag: { public: true, type: 'INTEGER' },
           fCUServiceHistNr: { public: true, type: 'INTEGER' },
           fCUServiceUntilDate: { public: true, type: 'DATE' },
           fServiceDelDate: { public: true, type: 'DATE' },
           fLocation: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fDiscApprovedBy: { public: true, type: 'TEXT' },
           fPerceptions: { public: true, type: 'INTEGER' },
           fVoidedRowNr: { public: true, type: 'INTEGER' },
           fVoidedSign: { public: true, type: 'TEXT' },
           fOvst: { public: true, type: 'INTEGER' },
           fWithholdings: { public: true, type: 'INTEGER' },
           fWHTax: { public: true, type: 'TEXT' },
           fCCTransID: { public: true, type: 'TEXT' },
           fTaxMatrix: { public: true, type: 'TEXT' },
           fTaxTemplateCode: { public: true, type: 'TEXT' },
           fResUsage: { public: true, type: 'TEXT' },
           fMBRCode: { public: true, type: 'TEXT' },
           fChequeNr: { public: true, type: 'INTEGER' },
           fCheckNr: { public: true, type: 'TEXT' },
           fPoints: { public: true, type: 'FLOAT' },
           fSalesAssistant: { public: true, type: 'TEXT' },
           fCCTimestamp: { public: true, type: 'TEXT' },
           fMotherArtCode: { public: true, type: 'TEXT' },
           fRecipeQuant: { public: true, type: 'FLOAT' },
           fOrdNr: { public: true, type: 'INTEGER' },
           fIVNr: { public: true, type: 'INTEGER' },
           fRetRow: { public: true, type: 'INTEGER' },
           fQTRow: { public: true, type: 'INTEGER' },
           fSHNr: { public: true, type: 'INTEGER' },
           fSHRow: { public: true, type: 'INTEGER' },
           fCustArtCode: { public: true, type: 'TEXT' },
           fSalesmen: { public: true, type: 'TEXT' },
           fCredOfficialSerNr: { public: true, type: 'TEXT' },
           fMotherNr: { public: true, type: 'TEXT' },
           fAEStatus: { public: true, type: 'INTEGER' },
           fCustomsNr: { public: true, type: 'TEXT' },
           fCountryOfOrg: { public: true, type: 'TEXT' },
           fSecondarySerialNr: { public: true, type: 'TEXT' },
           fAlternateDeviceID: { public: true, type: 'TEXT' },
           fMotherSecondarySerialNr: { public: true, type: 'TEXT' },
           fMotherAlternateDeviceID: { public: true, type: 'TEXT' },
           fUnitComment: { public: true, type: 'TEXT' },
           fRvrsVATCode: { public: true, type: 'TEXT' } } },
     fPayDate: { public: true, type: 'DATE' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fClientContact: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fPayDeal: { public: true, type: 'TEXT' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fPrntdf: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fPdays: { public: true, type: 'INTEGER' },
     fPdvrebt: { public: true, type: 'FLOAT' },
     fPdrdays: { public: true, type: 'INTEGER' },
     fCustCat: { public: true, type: 'TEXT' },
     fPdComment: { public: true, type: 'TEXT' },
     fX1: { public: true, type: 'TEXT' },
     fInvType: { public: true, type: 'INTEGER' },
     fXStatFlag: { public: true, type: 'INTEGER' },
     fPriceList: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fARAcc: { public: true, type: 'TEXT' },
     fInvComment: { public: true, type: 'TEXT' },
     fCredInv: { public: true, type: 'INTEGER' },
     fCredMark: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fTransDate: { public: true, type: 'DATE' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fUpdStockFlag: { public: true, type: 'INTEGER' },
     fLastRemndr: { public: true, type: 'INTEGER' },
     fLastRemDate: { public: true, type: 'DATE' },
     fSign: { public: true, type: 'TEXT' },
     fFrPrice: { public: true, type: 'FLOAT' },
     fFrBase: { public: true, type: 'FLOAT' },
     fFrItem: { public: true, type: 'TEXT' },
     fFrVATCode: { public: true, type: 'TEXT' },
     fFrObjects: { public: true, type: 'TEXT' },
     fOrgCust: { public: true, type: 'TEXT' },
     fFrGP: { public: true, type: 'FLOAT' },
     fFrGPPercent: { public: true, type: 'FLOAT' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fVATNr: { public: true, type: 'TEXT' },
     fShipDeal: { public: true, type: 'TEXT' },
     fShipAddr0: { public: true, type: 'TEXT' },
     fShipAddr1: { public: true, type: 'TEXT' },
     fShipAddr2: { public: true, type: 'TEXT' },
     fShipAddr3: { public: true, type: 'TEXT' },
     fShipMode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fPRCode: { public: true, type: 'TEXT' },
     fFrSalesAcc: { public: true, type: 'TEXT' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fCustVATCode: { public: true, type: 'TEXT' },
     fRebCode: { public: true, type: 'TEXT' },
     fCalcFinRef: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fIntCode: { public: true, type: 'TEXT' },
     fARonTR: { public: true, type: 'INTEGER' },
     fCustOrdNr: { public: true, type: 'TEXT' },
     fExportedFlag: { public: true, type: 'INTEGER' },
     fBaseSum4: { public: true, type: 'FLOAT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fInvoiceNr: { public: true, type: 'TEXT' },
     fDiscPerc: { public: true, type: 'FLOAT' },
     fDiscSum: { public: true, type: 'FLOAT' },
     fTotGP: { public: true, type: 'FLOAT' },
     fLocOKNr: { public: true, type: 'FLOAT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fCreditCard: { public: true, type: 'TEXT' },
     fAuthorizationCode: { public: true, type: 'TEXT' },
     fRecValue: { public: true, type: 'FLOAT' },
     fRetValue: { public: true, type: 'FLOAT' },
     fFromBUQT: { public: true, type: 'INTEGER' },
     fSorting: { public: true, type: 'TEXT' },
     fNoInterestFlag: { public: true, type: 'INTEGER' },
     fNoRemndrFlag: { public: true, type: 'INTEGER' },
     fSVONr: { public: true, type: 'INTEGER' },
     fInstallmentInv: { public: true, type: 'INTEGER' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fOfficialSerNr2: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fTotWeight: { public: true, type: 'FLOAT' },
     fTotVolume: { public: true, type: 'FLOAT' },
     fCommision: { public: true, type: 'FLOAT' },
     fSumIncCom: { public: true, type: 'FLOAT' },
     fInvAddr3: { public: true, type: 'TEXT' },
     fInvAddr4: { public: true, type: 'TEXT' },
     fDelAddr3: { public: true, type: 'TEXT' },
     fDelAddr4: { public: true, type: 'TEXT' },
     fDelAddrCode: { public: true, type: 'TEXT' },
     fAutoGiro: { public: true, type: 'INTEGER' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fDisputedFlag: { public: true, type: 'INTEGER' },
     fNoColectionFlag: { public: true, type: 'INTEGER' },
     fQTNr: { public: true, type: 'INTEGER' },
     fFiscalFlag: { public: true, type: 'INTEGER' },
     fJobNr: { public: true, type: 'INTEGER' },
     fRetnValue: { public: true, type: 'FLOAT' },
     fMachineName: { public: true, type: 'TEXT' },
     fTransTime: { public: true, type: 'TIME' },
     fDrawerCode: { public: true, type: 'TEXT' },
     fSiteX: { public: true, type: 'TEXT' },
     fColnr: { public: true, type: 'INTEGER' },
     fStatVal: { public: true, type: 'FLOAT' },
     fEInvFunc: { public: true, type: 'INTEGER' },
     fEInvExpFlag: { public: true, type: 'INTEGER' },
     fEInvExpDate: { public: true, type: 'DATE' },
     fEInvExpQty: { public: true, type: 'INTEGER' },
     fServiceDelDate: { public: true, type: 'DATE' },
     fRegion: { public: true, type: 'TEXT' },
     fRefStr: { public: true, type: 'TEXT' },
     fTAX2Sum: { public: true, type: 'FLOAT' },
     fPdvrebt2: { public: true, type: 'FLOAT' },
     fPdrdays2: { public: true, type: 'INTEGER' },
     fNoTax1: { public: true, type: 'INTEGER' },
     fNoTax2: { public: true, type: 'INTEGER' },
     fFreightCode: { public: true, type: 'TEXT' },
     fBankCode: { public: true, type: 'TEXT' },
     fInvalidDate: { public: true, type: 'DATE' },
     fInvalidLocOKNr: { public: true, type: 'FLOAT' },
     fNoEInvoice: { public: true, type: 'INTEGER' },
     fTaxAuthID: { public: true, type: 'TEXT' },
     fTaxAuthIDCC: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fNoTAXonVAT: { public: true, type: 'INTEGER' },
     fTotalwoTAX: { public: true, type: 'INTEGER' },
     fCredManNr: { public: true, type: 'INTEGER' },
     fRegDate: { public: true, type: 'DATE' },
     fRegTime: { public: true, type: 'TIME' },
     fCOCUSerNr: { public: true, type: 'INTEGER' },
     fCAE: { public: true, type: 'TEXT' },
     fCAEExpiry: { public: true, type: 'DATE' },
     fVINr: { public: true, type: 'INTEGER' },
     fTerminalID: { public: true, type: 'TEXT' },
     fOrderType: { public: true, type: 'INTEGER' },
     fFiscalDeviceSeqNr: { public: true, type: 'INTEGER' },
     fCCTransID: { public: true, type: 'TEXT' },
     fAcceptanceStatus: { public: true, type: 'INTEGER' },
     fTaxMatrix: { public: true, type: 'TEXT' },
     fCustTaxTemplateCode: { public: true, type: 'TEXT' },
     fRoyaltyIVFlag: { public: true, type: 'INTEGER' },
     fLoyaltyCardNr: { public: true, type: 'TEXT' },
     fLCMLevel: { public: true, type: 'TEXT' },
     fPoints: { public: true, type: 'FLOAT' },
     fDepCode: { public: true, type: 'TEXT' },
     fSelfBilling: { public: true, type: 'INTEGER' },
     fHash: { public: true, type: 'TEXT' },
     fHashKeyVersion: { public: true, type: 'INTEGER' },
     fInvCountry: { public: true, type: 'TEXT' },
     fDelCountry: { public: true, type: 'TEXT' },
     fTREONr: { public: true, type: 'INTEGER' },
     fORCONr: { public: true, type: 'INTEGER' },
     fCAEAStartDate: { public: true, type: 'DATE' },
     fCAEAExpiryDate: { public: true, type: 'DATE' },
     fCAEAFlag: { public: true, type: 'INTEGER' },
     fFInvExpFlag: { public: true, type: 'INTEGER' },
     fGroupInv: { public: true, type: 'INTEGER' },
     fSuspended: { public: true, type: 'INTEGER' },
     fAcceptanceBy: { public: true, type: 'TEXT' },
     fRetNr: { public: true, type: 'INTEGER' },
     fTaxAdminServSignatureTimeStamp: { public: true, type: 'TEXT' },
     fTaxAdminServCertificateNr: { public: true, type: 'TEXT' },
     fTaxAdminServSeal: { public: true, type: 'TEXT' },
     fCredOfficialSerNr: { public: true, type: 'TEXT' },
     fAcceptanceFYI: { public: true, type: 'TEXT' },
     fPMCode: { public: true, type: 'TEXT' },
     fPayAccNo: { public: true, type: 'TEXT' },
     fBrazilEInvType: { public: true, type: 'TEXT' },
     fTaxAdminReceiptNr: { public: true, type: 'TEXT' },
     fTaxAuthReceiptDate: { public: true, type: 'DATE' },
     fTaxAuthReceiptTime: { public: true, type: 'TIME' },
     fReceiptInfo: { public: true, type: 'TEXT' },
     fInvalidTime: { public: true, type: 'TIME' },
     fOKBy: { public: true, type: 'TEXT' },
     fPlanSendDate: { public: true, type: 'DATE' },
     fPlanSendTime: { public: true, type: 'TIME' },
     fPlanArrDate: { public: true, type: 'DATE' },
     fPlanArrTime: { public: true, type: 'TIME' },
     fFedServCode: { public: true, type: 'TEXT' },
     fInvalidBy: { public: true, type: 'TEXT' },
     fReason: { public: true, type: 'TEXT' },
     fInvCountryName: { public: true, type: 'TEXT' },
     fDelCountryName: { public: true, type: 'TEXT' },
     fOfficialSerNrSerie: { public: true, type: 'TEXT' },
     fOfficialSerNr2Serie: { public: true, type: 'TEXT' },
     fIPBookVAT: { public: true, type: 'INTEGER' },
     fThirdPartyBillMark: { public: true, type: 'INTEGER' },
     fRecipientGLN: { public: true, type: 'TEXT' },
     fDelRecipientGLN: { public: true, type: 'TEXT' },
     fIntrastatTransCode: { public: true, type: 'TEXT' },
     fGlobalTransportNr: { public: true, type: 'TEXT' },
     fGlobalTransportDate: { public: true, type: 'DATE' },
     fDeliverySiteCode: { public: true, type: 'TEXT' },
     fPrintDate: { public: true, type: 'TEXT' },
     fWorkSiteNumber: { public: true, type: 'TEXT' },
     fGPProc: { public: true, type: 'FLOAT' },
     fTaxInvType: { public: true, type: 'INTEGER' },
     fOYNr: { public: true, type: 'INTEGER' },
     fOYDescription: { public: true, type: 'TEXT' },
     fEMail: { public: true, type: 'TEXT' },
     fRvrsVAT: { public: true, type: 'FLOAT' },
     fRegNr1: { public: true, type: 'TEXT' },
     fPromotionCodes: { public: true, type: 'TEXT' },
     fBankReceiptNr: { public: true, type: 'TEXT' },
     fExcludeFromExports: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex89: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }