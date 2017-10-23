module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fNormProdQty: { public: true, type: 'FLOAT' },
     fMinProdQty: { public: true, type: 'FLOAT' },
     RecVcMatrix: 
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
           fRelVal: { public: true, type: 'FLOAT' },
           fDesc: { public: true, type: 'TEXT' },
           fRecipe: { public: true, type: 'INTEGER' },
           fMaterial: { public: true, type: 'TEXT' },
           fUnittext: { public: true, type: 'TEXT' } } },
     fInSum: { public: true, type: 'FLOAT' },
     fOutSum: { public: true, type: 'FLOAT' },
     fVEUnit: { public: true, type: 'TEXT' },
     fFixedAssembDays: { public: true, type: 'FLOAT' },
     fQtyAssemblyDays: { public: true, type: 'FLOAT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fResMgrColNr: { public: true, type: 'INTEGER' },
     fHrsToProd: { public: true, type: 'FLOAT' },
     fNumProd: { public: true, type: 'FLOAT' },
     fSetUpTime: { public: true, type: 'TIME' },
     fInstr0: { public: true, type: 'TEXT' },
     fInstr1: { public: true, type: 'TEXT' },
     fInstr2: { public: true, type: 'TEXT' },
     fStdBatch: { public: true, type: 'FLOAT' },
     fXScale: { public: true, type: 'FLOAT' },
     fExtraProdQty: { public: true, type: 'FLOAT' },
     fLangCode: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fActType: { public: true, type: 'TEXT' },
     fDefaultRouting: { public: true, type: 'TEXT' },
     fMinsToProd: { public: true, type: 'INTEGER' },
     fSecsToProd: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex147: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }