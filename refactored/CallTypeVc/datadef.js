module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPrefix: { public: true, type: 'TEXT' },
     fMarkup1: { public: true, type: 'FLOAT' },
     fMarkup2: { public: true, type: 'FLOAT' },
     fArtCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex270: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }