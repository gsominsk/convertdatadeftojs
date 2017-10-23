module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCNDCode: { public: true, type: 'TEXT' },
     fDownPayDeal: { public: true, type: 'TEXT' },
     fDownPercent: { public: true, type: 'FLOAT' },
     fRSCCode: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { CUCodeIndex637: { fields: [ 'fCUCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }