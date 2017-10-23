module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     SIPServerBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fSIP_IP_Address: { public: true, type: 'TEXT' },
           fSIP_Port: { public: true, type: 'TEXT' },
           fUser_ID: { public: true, type: 'TEXT' },
           fPassword: { public: true, type: 'TEXT' },
           fIntPrefix: { public: true, type: 'TEXT' },
           fCountryCode: { public: true, type: 'TEXT' },
           fDefAreaCode: { public: true, type: 'TEXT' },
           fSkipDigit: { public: true, type: 'TEXT' } } } } }