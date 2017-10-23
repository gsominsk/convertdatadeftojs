module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMath: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fVariety: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' } },
  indexes: 
   { ArtCodeIndex11: 
      { fields: [ 'fArtCode', 'fBranchID', 'fClass', 'fVariety' ],
        indicesType: 'UNIQUE' } } }