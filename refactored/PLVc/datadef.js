module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPLCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fExVatPrice: { public: true, type: 'FLOAT' },
     fSalesAcc: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fNoOtherPricing: { public: true, type: 'INTEGER' },
     fVATCode: { public: true, type: 'TEXT' },
     fDonotRecalculate: { public: true, type: 'INTEGER' },
     fCostPrice: { public: true, type: 'FLOAT' },
     fBBGenTrans: { public: true, type: 'INTEGER' },
     fBBVarAcc: { public: true, type: 'TEXT' } },
  indexes: 
   { PLCodeIndex383: 
      { fields: [ 'fPLCode', 'fArtCode', 'fCustCode' ],
        indicesType: 'UNIQUE' } } }