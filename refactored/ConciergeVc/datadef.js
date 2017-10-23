module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fPerson: { public: true, type: 'TEXT' },
     fCUCode: { public: true, type: 'TEXT' },
     fResCode: { public: true, type: 'TEXT' },
     fTransTime: { public: true, type: 'TIME' },
     fTransDate: { public: true, type: 'DATE' },
     fDateOut: { public: true, type: 'DATE' },
     fPlace: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fGuestCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex268: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }