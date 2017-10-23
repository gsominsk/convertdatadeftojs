module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fArtName: { public: true, type: 'TEXT' },
     fCustArtCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex766: { fields: [ 'fCustCode', 'fArtCode' ], indicesType: 'UNIQUE' } } }