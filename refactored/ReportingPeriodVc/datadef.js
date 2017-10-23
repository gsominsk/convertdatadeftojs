module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fPeriodLength: { public: true, type: 'INTEGER' },
     fPeriodType: { public: true, type: 'INTEGER' },
     fPeriodOffset: { public: true, type: 'INTEGER' },
     fPeriodUnits: { public: true, type: 'INTEGER' },
     fOffsetType: { public: true, type: 'INTEGER' },
     fPeriod2Str: { public: true, type: 'TEXT' },
     fReportingPeriodType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex763: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }