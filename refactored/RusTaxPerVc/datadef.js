module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     RusTaxPerVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fExpCode: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex688: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }