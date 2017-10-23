module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ASPControllersBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fIPAddress: { public: true, type: 'TEXT' },
           fPort: { public: true, type: 'INTEGER' },
           fKey: { public: true, type: 'TEXT' },
           fHostingPartner: { public: true, type: 'INTEGER' },
           fServerIsCloudController: { public: true, type: 'INTEGER' } } } } }