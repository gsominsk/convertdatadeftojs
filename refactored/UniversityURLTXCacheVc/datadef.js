module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fWindowName: { public: true, type: 'TEXT' },
     fURL: { public: true, type: 'TEXT' },
     fState: { public: true, type: 'INTEGER' },
     fUDate: { public: true, type: 'DATE' },
     fUTime: { public: true, type: 'TIME' },
     UniversityURLTXCacheVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fProperty: { public: true, type: 'TEXT' },
           fValue: { public: true, type: 'TEXT' },
           fProductCode: { public: true, type: 'TEXT' } } },
     fUUID: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex647: { fields: [ 'fUUID' ], indicesType: 'UNIQUE' } } }