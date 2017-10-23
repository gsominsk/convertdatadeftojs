module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFieldType: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fRequired: { public: true, type: 'INTEGER' },
     fParam: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'TEXT' },
     CURegFieldVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fAllowUpdate: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex699: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }