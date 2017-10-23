module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTopicCount: { public: true, type: 'INTEGER' },
     fPostCount: { public: true, type: 'INTEGER' },
     fLastReplyMail: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex854: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }