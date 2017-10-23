module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     LeaveSchemeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fActType: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fAllowance: { public: true, type: 'FLOAT' },
           fBankHolidays: { public: true, type: 'INTEGER' },
           fMondays: { public: true, type: 'INTEGER' },
           fMonStartTime: { public: true, type: 'TIME' },
           fMonEndTime: { public: true, type: 'TIME' },
           fTuesdays: { public: true, type: 'INTEGER' },
           fTueStartTime: { public: true, type: 'TIME' },
           fTueEndTime: { public: true, type: 'TIME' },
           fWednesdays: { public: true, type: 'INTEGER' },
           fWedStartTime: { public: true, type: 'TIME' },
           fWedEndTime: { public: true, type: 'TIME' },
           fThursdays: { public: true, type: 'INTEGER' },
           fThuStartTime: { public: true, type: 'TIME' },
           fThuEndTime: { public: true, type: 'TIME' },
           fFridays: { public: true, type: 'INTEGER' },
           fFriStartTime: { public: true, type: 'TIME' },
           fFriEndTime: { public: true, type: 'TIME' },
           fSaturndays: { public: true, type: 'INTEGER' },
           fSatStartTime: { public: true, type: 'TIME' },
           fSatEndTime: { public: true, type: 'TIME' },
           fSundays: { public: true, type: 'INTEGER' },
           fSunStartTime: { public: true, type: 'TIME' },
           fSunEndTime: { public: true, type: 'TIME' } } } },
  indexes: { CodeIndex717: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }