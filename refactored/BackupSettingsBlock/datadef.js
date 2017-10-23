module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRemoteBackupsf: { public: true, type: 'INTEGER' },
     fRemoteBackupsUser: { public: true, type: 'TEXT' },
     fRemoteBackupsPassword: { public: true, type: 'TEXT' },
     fRemoteBackupsAddress: { public: true, type: 'TEXT' },
     fRemoteBackupsPort: { public: true, type: 'INTEGER' },
     fRotateJournal: { public: true, type: 'INTEGER' },
     fMaxJournalFiles: { public: true, type: 'INTEGER' },
     fDummy: { public: true, type: 'INTEGER' },
     fEnableCloning: { public: true, type: 'INTEGER' },
     fClonePassword: { public: true, type: 'TEXT' } } }