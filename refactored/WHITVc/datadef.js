module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fITCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     WHITVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fWHTax: { public: true, type: 'TEXT' },
           fDiscount: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' },
           fTAXAcc: { public: true, type: 'TEXT' },
           fTmpTAXAcc: { public: true, type: 'TEXT' },
           fTAXBase: { public: true, type: 'FLOAT' } } } },
  indexes: { ITCodeIndex683: { fields: [ 'fITCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }