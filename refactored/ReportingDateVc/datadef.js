module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fUnitLength: { public: true, type: 'INTEGER' },
     fUnitType: { public: true, type: 'INTEGER' },
     fOffset: { public: true, type: 'INTEGER' },
     fOffsetType: { public: true, type: 'INTEGER' },
     fReportingDateType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex764: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }