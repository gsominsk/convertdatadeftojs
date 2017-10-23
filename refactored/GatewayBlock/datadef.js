module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEnabOTCP: { public: true, type: 'INTEGER' },
     fOTCPPort: { public: true, type: 'INTEGER' },
     fEnabHTTP: { public: true, type: 'INTEGER' },
     fHTTPPort: { public: true, type: 'INTEGER' },
     fEnabPOP3: { public: true, type: 'INTEGER' },
     fPop3Seconds: { public: true, type: 'INTEGER' },
     fEnabAutIn: { public: true, type: 'INTEGER' },
     fINSeconds: { public: true, type: 'INTEGER' },
     fUsername: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fTapiTSP: { public: true, type: 'TEXT' } } }