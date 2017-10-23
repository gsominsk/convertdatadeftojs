module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVc: { public: true, type: 'TEXT' },
     fSyncToServerPos: { public: true, type: 'INTEGER' },
     fSyncFromServerPos: { public: true, type: 'INTEGER' },
     fSyncToServerDelPos: { public: true, type: 'INTEGER' },
     fSyncFromServerDelPos: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex561: { fields: [ 'fVc' ], indicesType: 'UNIQUE' } } }