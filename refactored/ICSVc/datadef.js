module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' },
     fVariety: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' } },
  indexes: 
   { CustCodeIndex12: 
      { fields: [ 'fCustCode', 'fArtCode', 'fBranchID', 'fClass', 'fVariety' ],
        indicesType: 'UNIQUE' } } }