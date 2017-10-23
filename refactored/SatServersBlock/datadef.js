module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     SatServersBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fName: { public: true, type: 'TEXT' },
           fHostName: { public: true, type: 'TEXT' },
           fHansaPort: { public: true, type: 'INTEGER' },
           fWebPort: { public: true, type: 'INTEGER' },
           fSSLPort: { public: true, type: 'INTEGER' },
           fEncKey: { public: true, type: 'TEXT' } } } } }