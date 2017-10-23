module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fHRMPymtTypeClass: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex829: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }