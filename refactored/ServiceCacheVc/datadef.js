module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fServiceHost: { public: true, type: 'TEXT' },
     fServicePort: { public: true, type: 'INTEGER' },
     fFuncName: { public: true, type: 'TEXT' },
     fValidUntilDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' },
     fPartner: { public: true, type: 'TEXT' },
     fDemandContract: { public: true, type: 'INTEGER' },
     fServiceHTTPPort: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex498: { fields: [ 'fCode', 'fPartner' ], indicesType: 'UNIQUE' } } }