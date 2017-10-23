module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHost: { public: true, type: 'TEXT' },
     fCertificate: { public: true, type: 'TEXT' },
     fPrivateKey: { public: true, type: 'TEXT' },
     fPassphrase: { public: true, type: 'TEXT' } },
  indexes: { HostIndex742: { fields: [ 'fHost' ], indicesType: 'UNIQUE' } } }