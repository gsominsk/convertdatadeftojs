module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fServerStat: { public: true, type: 'INTEGER' },
     fHALFuncs: { public: true, type: 'INTEGER' },
     fAllACs: { public: true, type: 'INTEGER' },
     fLongMessages: { public: true, type: 'INTEGER' },
     fDetailedMess: { public: true, type: 'INTEGER' },
     fHALProfile: { public: true, type: 'INTEGER' },
     fLogHoldFlush: { public: true, type: 'INTEGER' },
     fLogWebCalls: { public: true, type: 'INTEGER' },
     fMailDebug: { public: true, type: 'INTEGER' },
     fLogSentEMails: { public: true, type: 'INTEGER' } } }