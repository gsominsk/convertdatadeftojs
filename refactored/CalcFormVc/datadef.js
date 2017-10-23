module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPayCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     CalcFormVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFrom: { public: true, type: 'FLOAT' },
           fTo: { public: true, type: 'FLOAT' },
           fPercent: { public: true, type: 'FLOAT' },
           fAmount: { public: true, type: 'FLOAT' } } } },
  indexes: { PayCodeIndex186: { fields: [ 'fPayCode' ], indicesType: 'UNIQUE' } } }