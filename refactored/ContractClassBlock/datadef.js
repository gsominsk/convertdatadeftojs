module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ContractClassBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fPeriodCode: { public: true, type: 'TEXT' },
           fNoRemndrFlag: { public: true, type: 'INTEGER' },
           fDefObject: { public: true, type: 'TEXT' },
           fHWCOClassType: { public: true, type: 'TEXT' } } } } }