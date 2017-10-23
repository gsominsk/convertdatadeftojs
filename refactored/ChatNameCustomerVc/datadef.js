module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fChatParty: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCompanyNr: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' } },
  indexes: { ChatPartyIndex197: { fields: [ 'fChatParty' ], indicesType: 'UNIQUE' } } }