module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     POSCommandsBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fText: { public: true, type: 'TEXT' },
           fAction: { public: true, type: 'INTEGER' },
           fCommand: { public: true, type: 'INTEGER' } } } } }