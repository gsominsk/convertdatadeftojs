module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDBStatus: { public: true, type: 'INTEGER' },
     fStopReason: { public: true, type: 'TEXT' },
     fDatabaseID: { public: true, type: 'TEXT' },
     fAutoDBStatus: { public: true, type: 'INTEGER' } } }