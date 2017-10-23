module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     FunctionsOnWebBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFunction: { public: true, type: 'TEXT' },
           fUserType: { public: true, type: 'INTEGER' },
           fSSLRequired: { public: true, type: 'INTEGER' },
           fHMACRequired: { public: true, type: 'INTEGER' },
           fAllowedIPs: { public: true, type: 'TEXT' } } } } }