module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSorting: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fLastChanged: { public: true, type: 'DATE' },
     fDummy: { public: true, type: 'DATE' },
     fDummy2: { public: true, type: 'TEXT' },
     fLangCode: { public: true, type: 'TEXT' },
     fMath2: { public: true, type: 'TEXT' },
     fHtmlTranslation: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'INTEGER' },
     fDummy3: { public: true, type: 'TEXT' },
     WebNGTranslateVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fOverviewText: { public: true, type: 'TEXT' } } } },
  indexes: 
   { CodeIndex592: 
      { fields: [ 'fCode', 'fLangCode', 'fSorting', 'fFileName' ],
        indicesType: 'UNIQUE' } } }