module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMode: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fMaxManualNr: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex425: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }