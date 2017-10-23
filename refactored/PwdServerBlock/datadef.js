module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPwdServerHost: { public: true, type: 'TEXT' },
     fPwdServerPort: { public: true, type: 'INTEGER' },
     fGetGUFromPwdServer: { public: true, type: 'INTEGER' },
     fGetGUDefaultAccess: { public: true, type: 'TEXT' } } }