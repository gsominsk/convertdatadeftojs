module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fRegDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fOKMark: { public: true, type: 'INTEGER' },
     TSVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDate: { public: true, type: 'DATE' },
           fEMCode: { public: true, type: 'TEXT' },
           fPRCode: { public: true, type: 'TEXT' },
           fArtCode: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fRowType: { public: true, type: 'INTEGER' },
           fStp: { public: true, type: 'INTEGER' },
           fOvst: { public: true, type: 'INTEGER' },
           fItemType: { public: true, type: 'INTEGER' },
           fTimeClass: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fArtName: { public: true, type: 'TEXT' },
           fPRName: { public: true, type: 'TEXT' },
           fEMName: { public: true, type: 'TEXT' },
           fComment1: { public: true, type: 'TEXT' },
           fComment2: { public: true, type: 'TEXT' } } },
     fComment: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' },
     fSumOther: { public: true, type: 'FLOAT' },
     fSalesMan: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex59: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }