module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLangCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' },
     fProgType: { public: true, type: 'INTEGER' } },
  indexes: { LangCodeIndex540: { fields: [ 'fLangCode', 'fProgType' ], indicesType: 'UNIQUE' } } }