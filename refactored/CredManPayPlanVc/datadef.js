module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCurBal: { public: true, type: 'FLOAT' },
     fTotInst: { public: true, type: 'FLOAT' },
     fTotInt: { public: true, type: 'FLOAT' },
     CredManPayPlanVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fTransDate: { public: true, type: 'DATE' },
           fPlanType: { public: true, type: 'INTEGER' },
           fSum: { public: true, type: 'FLOAT' },
           fAcumulatedInt: { public: true, type: 'FLOAT' },
           fBal: { public: true, type: 'FLOAT' },
           fIssuedNr: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex625: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }