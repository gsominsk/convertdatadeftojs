module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fDoneFlag: { public: true, type: 'INTEGER' },
     fXReserved: { public: true, type: 'INTEGER' },
     fProdDate: { public: true, type: 'DATE' },
     fQty: { public: true, type: 'FLOAT' },
     ProdVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItem: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fInQty: { public: true, type: 'FLOAT' },
           fOutQty: { public: true, type: 'FLOAT' },
           fItemCost: { public: true, type: 'FLOAT' },
           fExtraCost: { public: true, type: 'FLOAT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fBestBefore: { public: true, type: 'DATE' },
           fRelVal: { public: true, type: 'FLOAT' },
           fFIFORowVal: { public: true, type: 'FLOAT' },
           fCoefficient: { public: true, type: 'FLOAT' },
           fObjects: { public: true, type: 'TEXT' },
           fOutBatchStatus: { public: true, type: 'TEXT' },
           fUnitXval: { public: true, type: 'FLOAT' },
           fUnitYval: { public: true, type: 'FLOAT' },
           fUnitZval: { public: true, type: 'FLOAT' },
           fWeight: { public: true, type: 'FLOAT' },
           fPosCode: { public: true, type: 'TEXT' },
           fMaterial: { public: true, type: 'TEXT' },
           fActualQty: { public: true, type: 'FLOAT' },
           fOrgProdRow: { public: true, type: 'INTEGER' },
           fOrgProdFIFORowVal: { public: true, type: 'FLOAT' },
           fSuppSerialNr: { public: true, type: 'TEXT' },
           fMajStoneDet: { public: true, type: 'TEXT' },
           fColour: { public: true, type: 'TEXT' },
           fClarity: { public: true, type: 'TEXT' },
           fCert: { public: true, type: 'TEXT' },
           fMinStoneDet: { public: true, type: 'TEXT' },
           fMetal: { public: true, type: 'TEXT' },
           fRowWeight: { public: true, type: 'TEXT' },
           fSize: { public: true, type: 'TEXT' },
           fLength: { public: true, type: 'TEXT' },
           fWatchBrand: { public: true, type: 'TEXT' },
           fStyleName: { public: true, type: 'TEXT' },
           fWatchMetal: { public: true, type: 'TEXT' },
           fMovement: { public: true, type: 'TEXT' },
           fBrcStr: { public: true, type: 'TEXT' },
           fGender: { public: true, type: 'TEXT' },
           fOther: { public: true, type: 'TEXT' },
           fOther2: { public: true, type: 'TEXT' } } },
     fRecepy: { public: true, type: 'TEXT' },
     fRecName: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fExportedFlag: { public: true, type: 'INTEGER' },
     fLocOKNr: { public: true, type: 'FLOAT' },
     fStartDate: { public: true, type: 'DATE' },
     fPRStatusFlag: { public: true, type: 'INTEGER' },
     fFinnishedFlag: { public: true, type: 'INTEGER' },
     fComment2: { public: true, type: 'TEXT' },
     fComment3: { public: true, type: 'TEXT' },
     fFixAssCode: { public: true, type: 'TEXT' },
     fPerson: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     fBreakTime: { public: true, type: 'TIME' },
     fInspector: { public: true, type: 'TEXT' },
     fXInspectStatus: { public: true, type: 'INTEGER' },
     fProdOrder: { public: true, type: 'INTEGER' },
     fTotalIdleTime: { public: true, type: 'TIME' },
     fXSetUpTime: { public: true, type: 'TIME' },
     fXScale: { public: true, type: 'FLOAT' },
     fStandProblem: { public: true, type: 'TEXT' },
     fTotWeight: { public: true, type: 'FLOAT' },
     fTotOutWeight: { public: true, type: 'FLOAT' },
     fTotalProdOrdQty: { public: true, type: 'FLOAT' },
     fExtraProdQty: { public: true, type: 'FLOAT' },
     fLangCode: { public: true, type: 'TEXT' },
     fTotPalletNr: { public: true, type: 'FLOAT' },
     fOrgProdNr: { public: true, type: 'INTEGER' },
     fRouting: { public: true, type: 'TEXT' },
     fRowsHoldActualQty: { public: true, type: 'INTEGER' },
     fAcumCostPrice: { public: true, type: 'FLOAT' },
     fActualQty: { public: true, type: 'FLOAT' },
     fDisassemble: { public: true, type: 'INTEGER' },
     fProdClass: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex66: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }