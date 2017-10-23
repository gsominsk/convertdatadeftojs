module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDisAllowItems: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fCostPrice: { public: true, type: 'FLOAT' },
     EGVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fArtCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex16: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }