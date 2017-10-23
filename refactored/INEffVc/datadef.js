module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fArtCode: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' },
     fUsedQty: { public: true, type: 'FLOAT' },
     fRcvQty: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fEndDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     fAT2UnitCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex327: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }