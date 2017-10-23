module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     WebNGCountryVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fDefaultLanguage: { public: true, type: 'TEXT' },
     fAllowedLanguages: { public: true, type: 'TEXT' },
     fCountryRegion: { public: true, type: 'TEXT' },
     fHMCompany: { public: true, type: 'INTEGER' },
     fShowOnWeb: { public: true, type: 'INTEGER' },
     fOvrCountry: { public: true, type: 'TEXT' },
     fWebMailConference: { public: true, type: 'TEXT' },
     fIsoCode: { public: true, type: 'TEXT' },
     fCredCardTypes: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex594: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }