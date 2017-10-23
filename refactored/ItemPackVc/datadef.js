module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fBillName: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' },
     fActivef: { public: true, type: 'INTEGER' },
     ItemPackVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItemClass: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex511: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }