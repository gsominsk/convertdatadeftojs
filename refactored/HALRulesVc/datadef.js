module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFilename: { public: true, type: 'TEXT' },
     fFileOnClient: { public: true, type: 'INTEGER' },
     HALRulesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fType: { public: true, type: 'INTEGER' },
           fItem: { public: true, type: 'TEXT' },
           fLocation: { public: true, type: 'INTEGER' } } },
     fRequireRestart: { public: true, type: 'INTEGER' } },
  indexes: { FilenameIndex482: { fields: [ 'fFilename' ], indicesType: 'UNIQUE' } } }