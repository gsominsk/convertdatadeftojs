module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDesc: { public: true, type: 'TEXT' },
     fRecordType: { public: true, type: 'TEXT' },
     XMLExportVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDesc: { public: true, type: 'TEXT' },
           fRowType: { public: true, type: 'INTEGER' },
           fTagName: { public: true, type: 'TEXT' },
           fTagValue: { public: true, type: 'TEXT' },
           fTagNameSpace: { public: true, type: 'TEXT' },
           fTagAttributes: { public: true, type: 'TEXT' },
           fExportEmpty: { public: true, type: 'INTEGER' },
           fNewLine: { public: true, type: 'INTEGER' },
           fField: { public: true, type: 'TEXT' },
           fRowNr: { public: true, type: 'INTEGER' },
           fFormating: { public: true, type: 'TEXT' },
           fFileName: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex776: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }