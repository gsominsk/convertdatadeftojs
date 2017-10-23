module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PriceRangeBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } } }