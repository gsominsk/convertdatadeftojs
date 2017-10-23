module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMaxExtraBeds: { public: true, type: 'INTEGER' },
     fBranchID: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex221: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }