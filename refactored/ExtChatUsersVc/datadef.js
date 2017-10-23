module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserMailboxName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fLanguages: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fIDNr: { public: true, type: 'INTEGER' } },
  indexes: { UserMailboxNameIndex489: { fields: [ 'fUserMailboxName' ], indicesType: 'UNIQUE' } } }