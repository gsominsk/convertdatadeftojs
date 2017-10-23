module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPRCode: { public: true, type: 'TEXT' },
     fPRName: { public: true, type: 'TEXT' },
     fBudTime: { public: true, type: 'INTEGER' },
     fBudOther: { public: true, type: 'INTEGER' },
     fSumTime: { public: true, type: 'FLOAT' },
     fSumOther: { public: true, type: 'FLOAT' },
     fText0: { public: true, type: 'TEXT' },
     fText1: { public: true, type: 'TEXT' },
     fText2: { public: true, type: 'TEXT' },
     fText3: { public: true, type: 'TEXT' },
     fText4: { public: true, type: 'TEXT' },
     fText5: { public: true, type: 'TEXT' },
     fText6: { public: true, type: 'TEXT' },
     fText7: { public: true, type: 'TEXT' },
     fText8: { public: true, type: 'TEXT' },
     fText9: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fBudStocked: { public: true, type: 'INTEGER' },
     fSumStocked: { public: true, type: 'FLOAT' },
     fBudMaterial: { public: true, type: 'INTEGER' },
     fSumMaterial: { public: true, type: 'FLOAT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fInvFlag: { public: true, type: 'INTEGER' },
     fLangCode: { public: true, type: 'TEXT' },
     fRejected: { public: true, type: 'INTEGER' },
     fRejectDate: { public: true, type: 'DATE' },
     fMarkup: { public: true, type: 'FLOAT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTotSum: { public: true, type: 'FLOAT' },
     BUQTVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math2',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fSpec: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' },
           fPrice: { public: true, type: 'FLOAT' },
           fDiscount: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fEMCode: { public: true, type: 'TEXT' },
           fRowType: { public: true, type: 'INTEGER' },
           fBudType: { public: true, type: 'INTEGER' },
           fItemType: { public: true, type: 'INTEGER' },
           fInvAfter: { public: true, type: 'DATE' },
           fInvoiced: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' },
           fCost: { public: true, type: 'FLOAT' },
           fGP: { public: true, type: 'FLOAT' },
           fTimeClass: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fInvDate: { public: true, type: 'DATE' },
           fFromTBQT: { public: true, type: 'INTEGER' },
           fStp: { public: true, type: 'INTEGER' },
           fMarkup: { public: true, type: 'FLOAT' },
           fGM: { public: true, type: 'FLOAT' },
           fRecepy: { public: true, type: 'TEXT' } } },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex170: { fields: [ 'fPRCode', 'fRejectDate' ], indicesType: 'UNIQUE' } } }