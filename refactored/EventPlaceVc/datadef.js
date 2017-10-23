module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDelAddr0: { public: true, type: 'TEXT' },
     fDelAddr1: { public: true, type: 'TEXT' },
     fDelAddr2: { public: true, type: 'TEXT' },
     fZipCode: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fEmail: { public: true, type: 'TEXT' },
     fWebSite: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex332: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }