module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     BFVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCrvval: { public: true, type: 'FLOAT' } } },
     fBFCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' } },
  indexes: { BFCodeIndex31: { fields: [ 'fBFCode' ], indicesType: 'UNIQUE' } } }