module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUUID: { public: true, type: 'TEXT' },
     fVc: { public: true, type: 'TEXT' },
     ResolveConflictVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fFieldName: { public: true, type: 'TEXT' },
           fRow: { public: true, type: 'INTEGER' },
           fLocalValue: { public: true, type: 'TEXT' },
           fRemoteValue: { public: true, type: 'TEXT' } } } },
  indexes: { UUIDIndex564: { fields: [ 'fUUID' ], indicesType: 'UNIQUE' } } }