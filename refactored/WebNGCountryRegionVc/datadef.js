module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     WebNGCountryRegionVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex595: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }