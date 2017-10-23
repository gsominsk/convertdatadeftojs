module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ODBCLinkBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVcCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fEvent: { public: true, type: 'TEXT' } } } } }