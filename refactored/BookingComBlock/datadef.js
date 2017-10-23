module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUsername: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fHotelID: { public: true, type: 'TEXT' },
     fEnable: { public: true, type: 'INTEGER' },
     fBookOrigin: { public: true, type: 'TEXT' },
     fResUsage: { public: true, type: 'TEXT' },
     fLogCommunication: { public: true, type: 'INTEGER' },
     fCUCode: { public: true, type: 'TEXT' } } }