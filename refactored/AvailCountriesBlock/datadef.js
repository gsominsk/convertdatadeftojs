module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSelLang: { public: true, type: 'TEXT' },
     AvailCountriesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCountryCode: { public: true, type: 'TEXT' },
           fCountry: { public: true, type: 'TEXT' },
           fLanguageCode: { public: true, type: 'TEXT' } } } } }