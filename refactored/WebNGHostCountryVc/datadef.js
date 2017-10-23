module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHostname: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' } },
  indexes: { HostnameIndex597: { fields: [ 'fHostname' ], indicesType: 'UNIQUE' } } }