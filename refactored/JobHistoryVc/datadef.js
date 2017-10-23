module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fRecType: { public: true, type: 'INTEGER' },
     fRowNr: { public: true, type: 'INTEGER' },
     fEvent: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fPerson: { public: true, type: 'TEXT' } },
  indexes: 
   { SerNrIndex499: 
      { fields: [ 'fRecType', 'fSerNr', 'fRowNr' ],
        indicesType: 'UNIQUE' } } }