module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fClosedf: { public: true, type: 'INTEGER' },
     fPBXConnection: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fCallerIdNumber: { public: true, type: 'TEXT' },
     fCallerIdName: { public: true, type: 'TEXT' },
     fExcludeQueueFallbackf: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex815: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }