module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVersion: { public: true, type: 'TEXT' } },
  indexes: { VersionIndex693: { fields: [ 'fVersion' ], indicesType: 'UNIQUE' } } }