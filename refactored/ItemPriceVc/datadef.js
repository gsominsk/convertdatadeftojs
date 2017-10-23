module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fUPrice: { public: true, type: 'FLOAT' } },
  indexes: { ArtCodeIndex311: { fields: [ 'fArtCode' ], indicesType: 'UNIQUE' } } }