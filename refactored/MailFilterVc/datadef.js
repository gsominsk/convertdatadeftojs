module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMailBox: { public: true, type: 'INTEGER' },
     MailFilterVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAddress: { public: true, type: 'TEXT' },
           fType: { public: true, type: 'INTEGER' } } } },
  indexes: { SerNrIndex419: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }