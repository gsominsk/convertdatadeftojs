module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fWeighedAvPrice: { public: true, type: 'FLOAT' },
     fWeighedAvPriceB2: { public: true, type: 'FLOAT' } },
  indexes: { ArtCodeIndex234: { fields: [ 'fArtCode', 'fLocation' ], indicesType: 'UNIQUE' } } }