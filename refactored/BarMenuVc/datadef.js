module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMenuName: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' },
     fSorting: { public: true, type: 'TEXT' },
     fSalesItem: { public: true, type: 'TEXT' },
     fDiscountItem: { public: true, type: 'TEXT' },
     BarMenuVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fName: { public: true, type: 'TEXT' },
           fRowGroup: { public: true, type: 'TEXT' },
           fExtraCost: { public: true, type: 'FLOAT' },
           fClr: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex514: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }