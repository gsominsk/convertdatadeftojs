module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHost: { public: true, type: 'TEXT' },
     fSellerID: { public: true, type: 'TEXT' },
     fAWSAccessKeyID: { public: true, type: 'TEXT' },
     fSecretKey: { public: true, type: 'TEXT' },
     fMarketplaceID: { public: true, type: 'TEXT' },
     fMWSAuthToken: { public: true, type: 'TEXT' },
     fGMTOffset: { public: true, type: 'FLOAT' },
     fEnable: { public: true, type: 'INTEGER' },
     fLogCommunication: { public: true, type: 'INTEGER' } } }