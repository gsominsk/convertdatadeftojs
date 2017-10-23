module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fServerIP: { public: true, type: 'TEXT' },
     fUserIP: { public: true, type: 'TEXT' },
     fServerPort: { public: true, type: 'INTEGER' },
     fMaxFileSize: { public: true, type: 'INTEGER' },
     fUser: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fSMTPSSL: { public: true, type: 'INTEGER' },
     fAutoGateWayf: { public: true, type: 'INTEGER' },
     fAutoUser: { public: true, type: 'TEXT' },
     fAutoPassword: { public: true, type: 'TEXT' },
     fAutoInterval: { public: true, type: 'INTEGER' } } }