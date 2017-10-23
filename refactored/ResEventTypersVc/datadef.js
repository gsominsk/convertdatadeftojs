module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fJobNr: { public: true, type: 'INTEGER' },
     fEventGroup: { public: true, type: 'TEXT' },
     fEventType: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' } },
  indexes: { SerNrIndex335: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }