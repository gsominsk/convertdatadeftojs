module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     FunderIncBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fMin: { public: true, type: 'FLOAT' },
           fMax: { public: true, type: 'FLOAT' },
           fIncPrc: { public: true, type: 'FLOAT' },
           fIncSum: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }