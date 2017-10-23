module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fJobNr: { public: true, type: 'INTEGER' },
     fEventNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' } },
  indexes: 
   { JobNrIndex333: 
      { fields: [ 'fJobNr', 'fTransDate', 'fStartTime', 'fFileName', 'fEventNr' ],
        indicesType: 'UNIQUE' } } }