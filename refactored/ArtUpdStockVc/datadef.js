module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocation: { public: true, type: 'TEXT' },
     fAllGroups: { public: true, type: 'INTEGER' },
     ArtUpdStockVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fItemGroup: { public: true, type: 'TEXT' } } } },
  indexes: { LocationIndex535: { fields: [ 'fLocation' ], indicesType: 'UNIQUE' } } }