module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     UIReportVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fModule: { public: true, type: 'TEXT' },
           fTitle: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex446: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }