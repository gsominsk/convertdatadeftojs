module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fRegDate: { public: true, type: 'DATE' },
     fTransDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     RetVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fUPrice: { public: true, type: 'FLOAT' },
           fSerialNr: { public: true, type: 'TEXT' },
           fOrdRow: { public: true, type: 'INTEGER' },
           fExtra: { public: true, type: 'FLOAT' },
           fCostPrice: { public: true, type: 'FLOAT' },
           fVARList: { public: true, type: 'TEXT' },
           fBestBefore: { public: true, type: 'DATE' },
           fRecepy: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fBatchStatus: { public: true, type: 'TEXT' },
           fUnitXval: { public: true, type: 'FLOAT' },
           fUnitYval: { public: true, type: 'FLOAT' },
           fUnitZval: { public: true, type: 'FLOAT' },
           fBasePrice: { public: true, type: 'FLOAT' },
           fPosCode: { public: true, type: 'TEXT' },
           fCoefficient: { public: true, type: 'FLOAT' },
           fSHRow: { public: true, type: 'INTEGER' },
           fLocation: { public: true, type: 'TEXT' },
           fBBCostPrice: { public: true, type: 'FLOAT' },
           fCostAcc: { public: true, type: 'TEXT' },
           fInvd: { public: true, type: 'FLOAT' },
           fWSRow: { public: true, type: 'INTEGER' },
           fSVORow: { public: true, type: 'INTEGER' },
           fWSNr: { public: true, type: 'INTEGER' },
           fWSIVType: { public: true, type: 'INTEGER' },
           fMotherNr: { public: true, type: 'TEXT' } } },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fOrdNr: { public: true, type: 'INTEGER' },
     fLocation: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fToRateB1: { public: true, type: 'FLOAT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fSumQuant: { public: true, type: 'FLOAT' },
     fExtraCost: { public: true, type: 'FLOAT' },
     fFrRate: { public: true, type: 'FLOAT' },
     fToRateB2: { public: true, type: 'FLOAT' },
     fBaseRate1: { public: true, type: 'FLOAT' },
     fBaseRate2: { public: true, type: 'FLOAT' },
     fUpdStockFlag: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fLocOKNr: { public: true, type: 'FLOAT' },
     fObjects: { public: true, type: 'TEXT' },
     fSum4: { public: true, type: 'FLOAT' },
     fSHNr: { public: true, type: 'INTEGER' },
     fReason: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fInvalidDate: { public: true, type: 'DATE' },
     fInvoiceNr: { public: true, type: 'INTEGER' },
     fTerminalID: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fHash: { public: true, type: 'TEXT' },
     fHashKeyVersion: { public: true, type: 'INTEGER' },
     fRegTime: { public: true, type: 'TIME' },
     fLocalMachineCode: { public: true, type: 'TEXT' },
     fWSNr: { public: true, type: 'INTEGER' },
     fSVONr: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fEMCode: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fOKBy: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fOfficialSerNrSerie: { public: true, type: 'TEXT' },
     fOfficialSerNr2: { public: true, type: 'TEXT' },
     fOfficialSerNr2Serie: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex192: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }