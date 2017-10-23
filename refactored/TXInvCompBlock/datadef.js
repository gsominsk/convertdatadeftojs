module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     TXInvCompBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fService: { public: true, type: 'TEXT' },
           fRegInCountry: { public: true, type: 'INTEGER' },
           fInvCompany: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } } } }