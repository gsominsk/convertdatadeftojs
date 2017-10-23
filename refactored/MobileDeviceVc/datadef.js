module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fMobileNumber: { public: true, type: 'TEXT' },
     fDeviceType: { public: true, type: 'INTEGER' },
     fActiveFlag: { public: true, type: 'INTEGER' },
     fDeviceToken: { public: true, type: 'INTEGER' },
     fBundleIdentifier: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex659: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }