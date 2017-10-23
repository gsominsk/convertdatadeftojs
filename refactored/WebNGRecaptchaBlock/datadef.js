module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSiteKey: { public: true, type: 'TEXT' },
     fSecretKey: { public: true, type: 'TEXT' },
     fEnabContactUsForm: { public: true, type: 'INTEGER' },
     fEnabCURegister: { public: true, type: 'INTEGER' },
     fEnabTemp1: { public: true, type: 'INTEGER' } } }