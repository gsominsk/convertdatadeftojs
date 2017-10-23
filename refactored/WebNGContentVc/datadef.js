module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fSpecDate: { public: true, type: 'DATE' },
     fContentStyle: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' },
     fDefLangCode: { public: true, type: 'TEXT' },
     fContentCategory: { public: true, type: 'TEXT' },
     fLinkToStruct: { public: true, type: 'INTEGER' },
     fExcludeCountries: { public: true, type: 'TEXT' },
     fElementCode: { public: true, type: 'TEXT' },
     fVersions: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex591: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }