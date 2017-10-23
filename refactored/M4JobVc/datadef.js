module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndDate: { public: true, type: 'DATE' },
     fEndTime: { public: true, type: 'TIME' },
     fDescription: { public: true, type: 'TEXT' },
     fSoftVars: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex673: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }