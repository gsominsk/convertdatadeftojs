module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSpec: { public: true, type: 'TEXT' },
     fInvDir: { public: true, type: 'INTEGER' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fOperationType: { public: true, type: 'TEXT' },
     fServiceFlag: { public: true, type: 'INTEGER' },
     fCulturalIncentiveFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex769: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }