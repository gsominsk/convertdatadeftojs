module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRegDate: { public: true, type: 'DATE' },
     fTransDate: { public: true, type: 'DATE' },
     fSign: { public: true, type: 'TEXT' },
     RegArchiveVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFileName: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' },
           fTransDate: { public: true, type: 'DATE' },
           fConnectTo: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex614: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }