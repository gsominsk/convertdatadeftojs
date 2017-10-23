module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fArtName: { public: true, type: 'TEXT' } },
  indexes: { ArtCodeIndex761: { fields: [ 'fArtCode' ], indicesType: 'UNIQUE' } } }