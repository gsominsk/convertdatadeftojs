module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fJobSerNr: { public: true, type: 'INTEGER' },
     fResType: { public: true, type: 'TEXT' },
     fMtrxDate: { public: true, type: 'DATE' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     fResLoc: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex299: 
      { fields: [ 'fResType', 'fMtrxDate', 'fJobSerNr' ],
        indicesType: 'UNIQUE' } } }