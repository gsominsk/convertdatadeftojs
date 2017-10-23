module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fEventNr: { public: true, type: 'INTEGER' },
     fEventRow: { public: true, type: 'INTEGER' },
     fFromFileName: { public: true, type: 'INTEGER' },
     fFromTransNr: { public: true, type: 'INTEGER' },
     fSequenceNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fEventType: { public: true, type: 'TEXT' },
     fRsrtEventTypePack: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex676: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }