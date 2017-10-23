module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fExternalEMail: { public: true, type: 'INTEGER' },
     fMailbox: { public: true, type: 'INTEGER' },
     fMailboxName: { public: true, type: 'TEXT' } },
  indexes: { ExternalEMailIndex695: { fields: [ 'fExternalEMail' ], indicesType: 'UNIQUE' } } }