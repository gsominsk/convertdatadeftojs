module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCompanyNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' },
     WebNGCompCountryVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' },
           fGroupDesc: { public: true, type: 'TEXT' } } },
     fGroupID: { public: true, type: 'TEXT' },
     fGroupDesc: { public: true, type: 'TEXT' },
     fCountryDefault: { public: true, type: 'INTEGER' } },
  indexes: { CompanyNrIndex599: { fields: [ 'fCompanyNr' ], indicesType: 'UNIQUE' } } }