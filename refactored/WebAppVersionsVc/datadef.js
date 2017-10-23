module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fProduct: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'INTEGER' },
     fReleaseVersion: { public: true, type: 'TEXT' },
     fTestVersion: { public: true, type: 'TEXT' },
     fDevVersion: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex839: { fields: [ 'fProduct', 'fCountry' ], indicesType: 'UNIQUE' } } }