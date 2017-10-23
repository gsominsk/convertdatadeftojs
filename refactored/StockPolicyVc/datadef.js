module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fLocation: { public: true, type: 'TEXT' },
     fMinDays: { public: true, type: 'INTEGER' },
     fMaxDays: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fDateChanged: { public: true, type: 'DATE' },
     fClass: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex522: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }