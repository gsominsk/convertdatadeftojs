module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fIVNr: { public: true, type: 'INTEGER' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fJournalID: { public: true, type: 'TEXT' },
     fOfficialSerNrSerie: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex479: 
      { fields: [ 'fIVNr', 'fFileName', 'fOfficialSerNr' ],
        indicesType: 'UNIQUE' } } }