module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fLinkTo: { public: true, type: 'TEXT' },
     fExtraArgs: { public: true, type: 'TEXT' },
     fTarget: { public: true, type: 'TEXT' },
     fNoSession: { public: true, type: 'INTEGER' },
     fWebMenuCode: { public: true, type: 'TEXT' },
     WebMenuVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } },
     fLinkPict: { public: true, type: 'TEXT' },
     fNextMenu: { public: true, type: 'TEXT' },
     fGoToURL: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex326: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }