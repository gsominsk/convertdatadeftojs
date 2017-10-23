module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUseHttps: { public: true, type: 'INTEGER' },
     fSSLCertFile: { public: true, type: 'TEXT' },
     fSSLPrivKeyFile: { public: true, type: 'TEXT' },
     fSSLPrivKeyPassword: { public: true, type: 'TEXT' } } }