module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUUID: { public: true, type: 'TEXT' },
     fServerSequence: { public: true, type: 'INTEGER' },
     fSyncFlags: { public: true, type: 'INTEGER' } },
  indexes: { UUIDIndex563: { fields: [ 'fUUID' ], indicesType: 'UNIQUE' } } }