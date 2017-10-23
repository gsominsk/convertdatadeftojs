module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBundleIdentifier: { public: true, type: 'TEXT' },
     fDeviceType: { public: true, type: 'INTEGER' },
     fKeyPassword: { public: true, type: 'TEXT' } },
  indexes: { BundleIdentifierIndex866: { fields: [ 'fBundleIdentifier' ], indicesType: 'UNIQUE' } } }