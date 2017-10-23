module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ISAccessBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fUserCode: { public: true, type: 'TEXT' },
           fWeight: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }