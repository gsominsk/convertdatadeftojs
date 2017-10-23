module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromArtCode: { public: true, type: 'TEXT' },
     fFromArtName: { public: true, type: 'TEXT' },
     fToArtCode: { public: true, type: 'TEXT' },
     fToArtName: { public: true, type: 'TEXT' },
     fFactor: { public: true, type: 'FLOAT' } },
  indexes: 
   { FromArtCodeIndex729: 
      { fields: [ 'fFromArtCode', 'fToArtCode' ],
        indicesType: 'UNIQUE' } } }