module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVECode: { public: true, type: 'TEXT' },
     fVEName: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fVEStoreID: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fVEOurID: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex635: { fields: [ 'fVECode', 'fLocation' ], indicesType: 'UNIQUE' } } }