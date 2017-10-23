module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCompName: { public: true, type: 'TEXT' },
     fVATNr: { public: true, type: 'TEXT' },
     fRegNr1: { public: true, type: 'TEXT' },
     fRegNr2: { public: true, type: 'TEXT' },
     fFromDate: { public: true, type: 'DATE' },
     fToDate: { public: true, type: 'DATE' },
     fService: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fANACode: { public: true, type: 'TEXT' } },
  indexes: { CompNameIndex457: { fields: [ 'fCompName' ], indicesType: 'UNIQUE' } } }