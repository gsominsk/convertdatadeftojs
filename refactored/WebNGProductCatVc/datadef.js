module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fParentCategory: { public: true, type: 'TEXT' },
     WebNGProductCatVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fElementProducts: { public: true, type: 'TEXT' },
     fElementCategories: { public: true, type: 'TEXT' },
     fDontInheritElements: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex604: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }