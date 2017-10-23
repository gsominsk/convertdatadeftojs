module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     WebNGSitesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fHost: { public: true, type: 'TEXT' },
           fSiteTitle: { public: true, type: 'TEXT' },
           fPrependTitle: { public: true, type: 'INTEGER' },
           fHeaderElement: { public: true, type: 'TEXT' },
           fFooterElement: { public: true, type: 'TEXT' },
           fStyleSheet: { public: true, type: 'TEXT' },
           fGoogleAnalyticsID: { public: true, type: 'TEXT' },
           fAllowLogin: { public: true, type: 'INTEGER' },
           fStartStruct: { public: true, type: 'TEXT' },
           fErrorPage: { public: true, type: 'TEXT' },
           fLoginNode: { public: true, type: 'INTEGER' },
           fSelectCountryStruct: { public: true, type: 'INTEGER' } } } } }