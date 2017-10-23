module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSendReminders: { public: true, type: 'INTEGER' },
     fSMSReminderText: { public: true, type: 'TEXT' },
     fReminderTime: { public: true, type: 'TIME' },
     fDaysBeforeEvent: { public: true, type: 'INTEGER' } } }