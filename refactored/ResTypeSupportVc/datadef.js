module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCode: { public: true, type: 'TEXT' },
     fResLoc: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fQty: { public: true, type: 'FLOAT' },
     fType: { public: true, type: 'INTEGER' },
     fEndDate: { public: true, type: 'DATE' },
     fJobNr: { public: true, type: 'INTEGER' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' } },
  indexes: { SerNrIndex648: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }