module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     CompTextTypeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTextTypeCode: { public: true, type: 'TEXT' },
           fTextTypeComment: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex117: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }