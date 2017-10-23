module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fHost: { public: true, type: 'TEXT' },
     fPort: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fSUDate: { public: true, type: 'DATE' },
     fSUTime: { public: true, type: 'TIME' },
     fHTTPPort: { public: true, type: 'INTEGER' },
     fFetchServiceUsageFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex462: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }