module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fWindowName: { public: true, type: 'TEXT' },
     WindowDynValuesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFieldName: { public: true, type: 'TEXT' },
           fFieldValue: { public: true, type: 'TEXT' } } } },
  indexes: { WindowNameIndex864: { fields: [ 'fWindowName' ], indicesType: 'UNIQUE' } } }