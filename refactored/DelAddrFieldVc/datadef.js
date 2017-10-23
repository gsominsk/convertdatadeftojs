module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFieldType: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fRequired: { public: true, type: 'INTEGER' },
     fSorting: { public: true, type: 'TEXT' },
     DelAddrFieldVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex744: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }