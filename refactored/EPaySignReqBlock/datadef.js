module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     EPaySignReqBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fSum: { public: true, type: 'FLOAT' },
           fWeight: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }