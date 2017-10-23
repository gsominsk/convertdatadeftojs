module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fActivate: { public: true, type: 'INTEGER' },
     fHistoryDays: { public: true, type: 'INTEGER' },
     fInterval: { public: true, type: 'INTEGER' },
     fXxInitialSyncDone: { public: true, type: 'INTEGER' } } }