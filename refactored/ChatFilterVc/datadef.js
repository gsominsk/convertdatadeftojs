module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSign: { public: true, type: 'TEXT' },
     ChatFilterVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fChatParty: { public: true, type: 'TEXT' },
           fPrivacyLevel: { public: true, type: 'INTEGER' },
           fCustCode: { public: true, type: 'TEXT' },
           fCompanyNr: { public: true, type: 'INTEGER' },
           fChatPartyDisplayName: { public: true, type: 'TEXT' } } } },
  indexes: { SignIndex198: { fields: [ 'fSign' ], indicesType: 'UNIQUE' } } }