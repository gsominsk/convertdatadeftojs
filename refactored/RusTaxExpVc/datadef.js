module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     RusTaxExpVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRowCode: { public: true, type: 'TEXT' },
           fRowData: { public: true, type: 'TEXT' },
           fRowType: { public: true, type: 'INTEGER' },
           fDataType: { public: true, type: 'TEXT' },
           fDataLenght: { public: true, type: 'INTEGER' },
           fBalType: { public: true, type: 'INTEGER' } } },
     fTaxRepCode: { public: true, type: 'TEXT' },
     fFileType: { public: true, type: 'INTEGER' },
     fFilename: { public: true, type: 'TEXT' },
     fRepType: { public: true, type: 'INTEGER' },
     fMath0: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex686: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }