module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLastFileNr: { public: true, type: 'INTEGER' },
     fImportFileFolder: { public: true, type: 'TEXT' },
     fMoveFileFolder: { public: true, type: 'TEXT' },
     fSkipCreditInv: { public: true, type: 'INTEGER' },
     fConsEDIInvRows: { public: true, type: 'INTEGER' },
     fExportFileFolder: { public: true, type: 'TEXT' },
     fFileExtNr: { public: true, type: 'INTEGER' },
     fTestCode: { public: true, type: 'TEXT' },
     fLiveCode: { public: true, type: 'TEXT' },
     fLive: { public: true, type: 'INTEGER' } } }