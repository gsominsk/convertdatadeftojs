module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CustomOfficesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } } }