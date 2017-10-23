module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromHost: { public: true, type: 'TEXT' },
     fToHost: { public: true, type: 'TEXT' },
     fKeepPath: { public: true, type: 'INTEGER' },
     fRedirectType: { public: true, type: 'INTEGER' },
     fKeepParams: { public: true, type: 'INTEGER' } },
  indexes: { FromHostIndex697: { fields: [ 'fFromHost' ], indicesType: 'UNIQUE' } } }