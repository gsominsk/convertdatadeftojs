module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     AdvPriceRecVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPeriodType: { public: true, type: 'INTEGER' },
           fInvBeforeDays: { public: true, type: 'INTEGER' },
           fPeriodUnit: { public: true, type: 'INTEGER' },
           fPrice: { public: true, type: 'FLOAT' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fLength: { public: true, type: 'INTEGER' },
           fPLCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fVRebate: { public: true, type: 'FLOAT' } } },
     fItemCode: { public: true, type: 'TEXT' },
     fItemName: { public: true, type: 'TEXT' },
     fRowNr: { public: true, type: 'INTEGER' },
     fInvItemCode: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex364: 
      { fields: [ 'fFileName', 'fSerNr', 'fRowNr' ],
        indicesType: 'UNIQUE' } } }