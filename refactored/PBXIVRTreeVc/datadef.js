module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSipTrunk: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fExtension: { public: true, type: 'TEXT' },
     fOpenTime: { public: true, type: 'TIME' },
     fCloseTime: { public: true, type: 'TIME' },
     fInterval: { public: true, type: 'INTEGER' },
     PBXIVRTreeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fNumber: { public: true, type: 'TEXT' },
           fQueue: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fMenu: { public: true, type: 'TEXT' } } },
     fOpenTime2: { public: true, type: 'TIME' },
     fCloseTime2: { public: true, type: 'TIME' },
     fCRMCompany: { public: true, type: 'TEXT' },
     fExcludeBankHolidaysf: { public: true, type: 'INTEGER' },
     fActReached: { public: true, type: 'TEXT' },
     fActReachedDone: { public: true, type: 'INTEGER' },
     fActOpen: { public: true, type: 'TEXT' },
     fActOpenDone: { public: true, type: 'INTEGER' },
     fAlwaysClosedf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex832: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }