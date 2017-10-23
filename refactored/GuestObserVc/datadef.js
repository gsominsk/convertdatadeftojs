module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fGuest: { public: true, type: 'TEXT' },
     fPerson: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fOBType: { public: true, type: 'TEXT' },
     fTransTime: { public: true, type: 'TIME' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' } },
  indexes: { SerNrIndex379: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }