module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromPath: { public: true, type: 'TEXT' },
     fToPath: { public: true, type: 'TEXT' },
     fKeepParams: { public: true, type: 'INTEGER' },
     fRedirectType: { public: true, type: 'INTEGER' } },
  indexes: { FromPathIndex698: { fields: [ 'fFromPath' ], indicesType: 'UNIQUE' } } }