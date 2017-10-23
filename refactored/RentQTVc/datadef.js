module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fOurContact: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fPayDeal: { public: true, type: 'TEXT' },
     fCustCat: { public: true, type: 'TEXT' },
     fInvType: { public: true, type: 'INTEGER' },
     fPriceList: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fInvComment: { public: true, type: 'TEXT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fLangCode: { public: true, type: 'TEXT' },
     fVATNr: { public: true, type: 'TEXT' },
     fShipDeal: { public: true, type: 'TEXT' },
     fShipAddr0: { public: true, type: 'TEXT' },
     fShipAddr1: { public: true, type: 'TEXT' },
     fShipAddr2: { public: true, type: 'TEXT' },
     fShipAddr3: { public: true, type: 'TEXT' },
     fShipMode: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fRebCode: { public: true, type: 'TEXT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fInvoiceToCode: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'TEXT' },
     fCustVATCode: { public: true, type: 'TEXT' },
     fInvAddr3: { public: true, type: 'TEXT' },
     fInvAddr4: { public: true, type: 'TEXT' },
     fDelAddr3: { public: true, type: 'TEXT' },
     fDelAddr4: { public: true, type: 'TEXT' },
     fXDelAddrCode: { public: true, type: 'TEXT' },
     fEMail: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fAgreementNr: { public: true, type: 'INTEGER' },
     fLengthClass: { public: true, type: 'INTEGER' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     RentQTVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fSpec: { public: true, type: 'TEXT' },
           fType: { public: true, type: 'INTEGER' },
           fGroup: { public: true, type: 'TEXT' },
           fInvItem: { public: true, type: 'TEXT' },
           fInvItemName: { public: true, type: 'TEXT' },
           fInvQuant: { public: true, type: 'FLOAT' },
           fPrice: { public: true, type: 'FLOAT' },
           fVRebate: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fStartInvoicing: { public: true, type: 'DATE' },
           fEndInvoicing: { public: true, type: 'DATE' },
           fAgreeType: { public: true, type: 'TEXT' },
           fVATCode: { public: true, type: 'TEXT' },
           fTAX2Code: { public: true, type: 'TEXT' },
           fTAX2Prc: { public: true, type: 'FLOAT' },
           fTAX2Reb: { public: true, type: 'FLOAT' },
           fTAX1Reb: { public: true, type: 'FLOAT' },
           fTAX2Acc: { public: true, type: 'TEXT' },
           fPeriodType: { public: true, type: 'INTEGER' },
           fInvBeforeDays: { public: true, type: 'INTEGER' },
           fPeriodUnit: { public: true, type: 'INTEGER' },
           fPerPrice: { public: true, type: 'FLOAT' },
           fPerStartDate: { public: true, type: 'DATE' },
           fPerEndDate: { public: true, type: 'DATE' },
           fLength: { public: true, type: 'INTEGER' },
           fPLCode: { public: true, type: 'TEXT' },
           fBelongsTo: { public: true, type: 'INTEGER' },
           fStp: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } },
     fLocation: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fAgreeType: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fClientContact: { public: true, type: 'TEXT' },
     fStartInvoicing: { public: true, type: 'DATE' },
     fEndInvoicing: { public: true, type: 'DATE' },
     fSite: { public: true, type: 'TEXT' },
     fFrPrice: { public: true, type: 'FLOAT' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fQuoteClass: { public: true, type: 'TEXT' },
     fMakeContactDate: { public: true, type: 'TEXT' },
     fValidUntilDate: { public: true, type: 'TEXT' },
     fProbability: { public: true, type: 'FLOAT' },
     fRejected: { public: true, type: 'INTEGER' },
     fRejectDate: { public: true, type: 'DATE' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fBaseSum4: { public: true, type: 'FLOAT' },
     fTAX2Sum: { public: true, type: 'FLOAT' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fDealerCode: { public: true, type: 'TEXT' },
     fDealerName: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex357: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }