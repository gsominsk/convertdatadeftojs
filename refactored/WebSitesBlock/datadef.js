module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     WebSitesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fHost: { public: true, type: 'TEXT' },
           fMidPage: { public: true, type: 'TEXT' },
           fTopMenu: { public: true, type: 'TEXT' },
           fLeftMenu: { public: true, type: 'TEXT' },
           fStyleSheet: { public: true, type: 'TEXT' },
           fLoginActive: { public: true, type: 'INTEGER' },
           fLoggedIn: { public: true, type: 'INTEGER' },
           fLeftMenuLI: { public: true, type: 'TEXT' } } } } }