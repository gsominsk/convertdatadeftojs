module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fModemType: { public: true, type: 'INTEGER' },
     fResolution: { public: true, type: 'INTEGER' },
     fSpeaker: { public: true, type: 'INTEGER' },
     fBaudRate: { public: true, type: 'INTEGER' },
     fPort: { public: true, type: 'TEXT' },
     fDialPrefix: { public: true, type: 'TEXT' },
     fPamFaxUserName: { public: true, type: 'TEXT' },
     fPamFaxPassword: { public: true, type: 'TEXT' },
     fPamFaxMode: { public: true, type: 'INTEGER' } } }