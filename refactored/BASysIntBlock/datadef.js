module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSMS: { public: true, type: 'INTEGER' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fSMSNumbers: { public: true, type: 'TEXT' },
     fSystemMobile: { public: true, type: 'TEXT' },
     fSMSStopEmailQueue: { public: true, type: 'INTEGER' },
     fStopEmailQueueLTxtCode: { public: true, type: 'TEXT' },
     fActStopEmailQueue: { public: true, type: 'INTEGER' },
     fStopEmailQueueActType: { public: true, type: 'TEXT' },
     fActStopCloudServices: { public: true, type: 'INTEGER' },
     fStopCloudServicesActType: { public: true, type: 'TEXT' } } }