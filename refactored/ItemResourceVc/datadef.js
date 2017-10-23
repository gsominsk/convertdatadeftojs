module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     ItemResourceVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fResourceType: { public: true, type: 'TEXT' },
           fWeight: { public: true, type: 'FLOAT' } } } },
  indexes: { ArtCodeIndex848: { fields: [ 'fArtCode' ], indicesType: 'UNIQUE' } } }