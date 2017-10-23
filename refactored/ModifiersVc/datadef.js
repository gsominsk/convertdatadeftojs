module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     ModifiersVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItem: { public: true, type: 'TEXT' },
           fName: { public: true, type: 'TEXT' },
           fGroup: { public: true, type: 'INTEGER' } } },
     fArtCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex513: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }