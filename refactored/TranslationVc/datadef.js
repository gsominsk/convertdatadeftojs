module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fWindow: { public: true, type: 'TEXT' },
     fFn: { public: true, type: 'INTEGER' },
     fLanguage: { public: true, type: 'TEXT' },
     fNewTranslation: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex874: 
      { fields: [ 'fWindow', 'fFn', 'fLanguage' ],
        indicesType: 'UNIQUE' } } }