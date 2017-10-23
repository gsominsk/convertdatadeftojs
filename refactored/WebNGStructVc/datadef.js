module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMother: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fHALFunc: { public: true, type: 'TEXT' },
     fWebPage: { public: true, type: 'TEXT' },
     fNeedsLogin: { public: true, type: 'INTEGER' },
     fLogAccess: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex588: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }