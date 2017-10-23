module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVersionBuild: { public: true, type: 'INTEGER' },
     fProgType: { public: true, type: 'INTEGER' },
     fLanguage: { public: true, type: 'TEXT' },
     fDBVersion: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fWhereIsIt: { public: true, type: 'TEXT' },
     fTestRelease: { public: true, type: 'INTEGER' },
     fLastDelivered: { public: true, type: 'DATE' },
     fNoDelivered: { public: true, type: 'INTEGER' },
     fMaxAvailablePerDay: { public: true, type: 'INTEGER' },
     fProductIdentifier: { public: true, type: 'TEXT' },
     fAdURL: { public: true, type: 'TEXT' },
     fClosedf: { public: true, type: 'INTEGER' } },
  indexes: 
   { VersionBuildIndex570: 
      { fields: 
         [ 'fVersionBuild',
           'fProgType',
           'fLanguage',
           'fDBVersion',
           'fProductIdentifier' ],
        indicesType: 'UNIQUE' } } }