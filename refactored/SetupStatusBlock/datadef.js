module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBackupImported: { public: true, type: 'INTEGER' },
     fUserSetup: { public: true, type: 'INTEGER' },
     fRegisteredForMarketplace: { public: true, type: 'INTEGER' },
     fDataEntered: { public: true, type: 'INTEGER' },
     fCompanySetup: { public: true, type: 'INTEGER' },
     fLicensingSrvContactUpdated: { public: true, type: 'INTEGER' } } }