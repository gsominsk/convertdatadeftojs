module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     CPMVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItemGroups: { public: true, type: 'TEXT' },
           fVal: { public: true, type: 'FLOAT' },
           fFromAmount: { public: true, type: 'FLOAT' },
           fToAmount: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex128: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }