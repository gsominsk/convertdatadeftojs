module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLinkHost: { public: true, type: 'TEXT' },
     fTestHost: { public: true, type: 'TEXT' },
     fLanguage: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' },
     fUseLangOfTranslation: { public: true, type: 'INTEGER' } } }