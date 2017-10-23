module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CompaniesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCompCode: { public: true, type: 'TEXT' },
           fCompName: { public: true, type: 'TEXT' },
           fShortName: { public: true, type: 'TEXT' },
           fTCPIP: { public: true, type: 'TEXT' },
           fPort: { public: true, type: 'TEXT' },
           fEnqKey: { public: true, type: 'TEXT' },
           fActiveStatus: { public: true, type: 'INTEGER' },
           fPresenceCode: { public: true, type: 'TEXT' },
           fPINCode: { public: true, type: 'TEXT' },
           fRegInCountry: { public: true, type: 'INTEGER' },
           fMode: { public: true, type: 'INTEGER' },
           fHostingService: { public: true, type: 'TEXT' },
           fServerUUID: { public: true, type: 'TEXT' } } } } }