module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fLanguage: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fLinkTo: { public: true, type: 'TEXT' },
     fExtraArgs: { public: true, type: 'TEXT' },
     fNoSession: { public: true, type: 'INTEGER' },
     WebNewAdvertVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math2',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLinktext: { public: true, type: 'TEXT' },
           fLinktext2: { public: true, type: 'TEXT' } } },
     fMath: { public: true, type: 'TEXT' },
     fAlwaysOnWeb: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' } },
  indexes: { CodeIndex580: { fields: [ 'fCode', 'fLanguage' ], indicesType: 'UNIQUE' } } }