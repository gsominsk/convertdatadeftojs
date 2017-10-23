module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fActivated: { public: true, type: 'INTEGER' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fHeader: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' },
     fForwardTo: { public: true, type: 'TEXT' },
     fHtmlTemplate: { public: true, type: 'TEXT' },
     fHtmlFlag: { public: true, type: 'INTEGER' },
     fForwardEnabled: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex413: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }