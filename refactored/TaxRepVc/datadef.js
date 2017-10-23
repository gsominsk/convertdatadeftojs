module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     TaxRepVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFCode: { public: true, type: 'TEXT' },
           fFormula: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fFormatStr: { public: true, type: 'TEXT' } } },
     fDelimiter: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex287: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }