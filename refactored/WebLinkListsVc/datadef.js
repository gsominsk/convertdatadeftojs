module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' },
     WebLinkListsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fComment: { public: true, type: 'TEXT' },
           fLinkComment: { public: true, type: 'TEXT' },
           fLinkString: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex500: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }