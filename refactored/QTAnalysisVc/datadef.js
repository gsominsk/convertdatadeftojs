module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fItemName: { public: true, type: 'TEXT' },
     QTAnalysisVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItemCode: { public: true, type: 'TEXT' },
           fItemName: { public: true, type: 'TEXT' },
           fRatio: { public: true, type: 'FLOAT' } } } },
  indexes: { ItemCodeIndex579: { fields: [ 'fItemCode' ], indicesType: 'UNIQUE' } } }