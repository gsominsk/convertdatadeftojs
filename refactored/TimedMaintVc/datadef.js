module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fRequestedBy: { public: true, type: 'TEXT' },
     fApprovedBy: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndDate: { public: true, type: 'DATE' },
     fEndTime: { public: true, type: 'TIME' },
     fDoneFlag: { public: true, type: 'INTEGER' },
     fRepSpec: { public: true, type: 'TEXT' },
     fSpecWClass: { public: true, type: 'TEXT' },
     fRepName: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex814: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }