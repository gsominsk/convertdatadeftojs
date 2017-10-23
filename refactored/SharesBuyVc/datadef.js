module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fRegDate: { public: true, type: 'DATE' },
     fLastChangeDate: { public: true, type: 'DATE' },
     SharesBuyVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fQty: { public: true, type: 'FLOAT' },
           fBuyForPrice: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' },
           fRegDate: { public: true, type: 'DATE' },
           fRegTime: { public: true, type: 'TIME' } } } },
  indexes: { UserCodeIndex465: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }