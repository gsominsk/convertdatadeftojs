module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     SvrUUIDHistBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fServerUUID: { public: true, type: 'TEXT' },
           fDate: { public: true, type: 'DATE' },
           fTime: { public: true, type: 'TIME' } } } } }