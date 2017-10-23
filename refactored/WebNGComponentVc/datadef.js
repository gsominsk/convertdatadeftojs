module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fCategory: { public: true, type: 'TEXT' },
     fOptionType: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     WebNGComponentVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fComponentCode: { public: true, type: 'TEXT' },
           fComponentName: { public: true, type: 'TEXT' },
           fRequirement: { public: true, type: 'INTEGER' },
           fQty: { public: true, type: 'FLOAT' },
           fQtyMin: { public: true, type: 'FLOAT' },
           fQtyMax: { public: true, type: 'FLOAT' },
           fOptionGroup: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex602: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }