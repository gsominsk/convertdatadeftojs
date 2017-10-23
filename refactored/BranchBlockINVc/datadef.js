module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBranchCode: { public: true, type: 'TEXT' },
     fBranchName: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fArtName: { public: true, type: 'TEXT' } },
  indexes: { BranchCodeIndex808: { fields: [ 'fBranchCode', 'fArtCode' ], indicesType: 'UNIQUE' } } }