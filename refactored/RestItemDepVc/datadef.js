module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fArtName: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' } },
  indexes: 
   { ArtCodeIndex818: 
      { fields: [ 'fArtCode', 'fDepartment', 'fBranchID' ],
        indicesType: 'UNIQUE' } } }