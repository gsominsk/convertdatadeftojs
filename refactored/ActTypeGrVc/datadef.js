module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fForceProj: { public: true, type: 'INTEGER' },
     fForceCust: { public: true, type: 'INTEGER' },
     fForceRes: { public: true, type: 'INTEGER' },
     fForceTime: { public: true, type: 'INTEGER' },
     fCalColNr: { public: true, type: 'INTEGER' },
     fCreateTBIV: { public: true, type: 'INTEGER' },
     fDefTimeFlag: { public: true, type: 'INTEGER' },
     fExclFromTimeStat: { public: true, type: 'INTEGER' },
     fPaidTotal: { public: true, type: 'INTEGER' },
     fAbsenceTotal: { public: true, type: 'INTEGER' },
     fCreateWSIV: { public: true, type: 'INTEGER' },
     fForceSVO: { public: true, type: 'INTEGER' },
     fSelEntryforSelType: { public: true, type: 'INTEGER' },
     fNoActwithSameTime: { public: true, type: 'INTEGER' },
     fForceItem: { public: true, type: 'INTEGER' },
     fAttachPdfToEMail: { public: true, type: 'INTEGER' },
     fForceTextInMatrix: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex111: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }