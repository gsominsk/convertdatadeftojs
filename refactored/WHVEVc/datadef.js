module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVECode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     WHVEVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fWHTax: { public: true, type: 'TEXT' },
           fStartDate: { public: true, type: 'DATE' },
           fDiscount: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' },
           fRegion: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' },
           fTAXAcc: { public: true, type: 'TEXT' },
           fTaxCode: { public: true, type: 'TEXT' },
           fCalculateTax: { public: true, type: 'INTEGER' } } },
     fClosed: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' } },
  indexes: { VECodeIndex481: { fields: [ 'fVECode', 'fStartDate' ], indicesType: 'UNIQUE' } } }