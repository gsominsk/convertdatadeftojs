module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fResCode: { public: true, type: 'TEXT' },
     fDueDays: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fStdRateID: { public: true, type: 'TEXT' },
     fResUsage: { public: true, type: 'TEXT' } },
  indexes: { ResCodeIndex386: { fields: [ 'fResCode' ], indicesType: 'UNIQUE' } } }