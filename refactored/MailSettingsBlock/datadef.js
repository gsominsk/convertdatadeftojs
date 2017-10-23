module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMBoxMaxMail: { public: true, type: 'INTEGER' },
     fMBoxMaxReadDays: { public: true, type: 'INTEGER' },
     fMBoxMaxUnreadDays: { public: true, type: 'INTEGER' },
     fArcMaxMail: { public: true, type: 'INTEGER' },
     fArcMaxDays: { public: true, type: 'INTEGER' },
     fConMaxMail: { public: true, type: 'INTEGER' },
     fConMaxDays: { public: true, type: 'INTEGER' },
     fNewMaxMail: { public: true, type: 'INTEGER' },
     fNewMaxDays: { public: true, type: 'INTEGER' },
     fBilMaxMail: { public: true, type: 'INTEGER' },
     fBilMaxDays: { public: true, type: 'INTEGER' },
     fAdmin: { public: true, type: 'TEXT' },
     fPostmaster: { public: true, type: 'TEXT' },
     fQueMaxSentMail: { public: true, type: 'INTEGER' },
     fQueMaxSentDays: { public: true, type: 'INTEGER' },
     fLockReceivedEmail: { public: true, type: 'INTEGER' },
     fLockSentEmail: { public: true, type: 'INTEGER' },
     fExclEmail: { public: true, type: 'INTEGER' },
     fFromSystem: { public: true, type: 'TEXT' },
     fUseExternalMail: { public: true, type: 'INTEGER' },
     fUseHTMLMail: { public: true, type: 'INTEGER' },
     fRequireExtEmail: { public: true, type: 'INTEGER' } } }