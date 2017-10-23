module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fProgType: { public: true, type: 'INTEGER' },
     fUntilThreeFirstChar: { public: true, type: 'TEXT' },
     SystemUsageSettingVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFieldName: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' } } },
     fServiceItemCode: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fItem3Months: { public: true, type: 'TEXT' },
     fItem12Months: { public: true, type: 'TEXT' },
     fMaxCnt: { public: true, type: 'INTEGER' },
     fStdFunction: { public: true, type: 'TEXT' },
     fSubINPackageCode: { public: true, type: 'TEXT' } },
  indexes: 
   { ItemCodeIndex376: 
      { fields: [ 'fItemCode', 'fUntilThreeFirstChar' ],
        indicesType: 'UNIQUE' } } }