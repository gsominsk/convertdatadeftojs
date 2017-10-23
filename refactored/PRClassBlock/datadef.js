module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PRClassBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fDefObject: { public: true, type: 'TEXT' },
           fPRClType: { public: true, type: 'TEXT' },
           fOTType: { public: true, type: 'TEXT' } } } } }