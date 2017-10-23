module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     QCTemplateVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fQCTest: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fQCUnit: { public: true, type: 'TEXT' },
           fFrom: { public: true, type: 'FLOAT' },
           fTo: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex620: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }