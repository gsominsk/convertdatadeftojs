module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMachineName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAvrTimePerPerson: { public: true, type: 'TIME' },
     fSeats: { public: true, type: 'INTEGER' },
     fGiveWarn: { public: true, type: 'INTEGER' },
     fMonStart: { public: true, type: 'TIME' },
     fMonEnd: { public: true, type: 'TIME' },
     fTueStart: { public: true, type: 'TIME' },
     fTueEnd: { public: true, type: 'TIME' },
     fWedStart: { public: true, type: 'TIME' },
     fWedEnd: { public: true, type: 'TIME' },
     fThuStart: { public: true, type: 'TIME' },
     fThuEnd: { public: true, type: 'TIME' },
     fFriStart: { public: true, type: 'TIME' },
     fFriEnd: { public: true, type: 'TIME' },
     fSatStart: { public: true, type: 'TIME' },
     fSatEnd: { public: true, type: 'TIME' },
     fSunStart: { public: true, type: 'TIME' },
     fSunEnd: { public: true, type: 'TIME' },
     fHHMonStart: { public: true, type: 'TIME' },
     fHHMonEnd: { public: true, type: 'TIME' } },
  indexes: { MachineNameIndex704: { fields: [ 'fMachineName' ], indicesType: 'UNIQUE' } } }