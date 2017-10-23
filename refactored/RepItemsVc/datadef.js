module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     RepItemsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItem: { public: true, type: 'TEXT' },
           fPrice: { public: true, type: 'FLOAT' },
           fCUCode: { public: true, type: 'TEXT' },
           fCUName: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' } } } },
  indexes: { SerNrIndex380: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }