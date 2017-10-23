module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RHistSetBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVcName: { public: true, type: 'TEXT' },
           fLogtyp: { public: true, type: 'INTEGER' },
           fFieldName: { public: true, type: 'TEXT' },
           fConditionField: { public: true, type: 'TEXT' },
           fCondition: { public: true, type: 'INTEGER' },
           fConditionValue: { public: true, type: 'TEXT' } } } } }