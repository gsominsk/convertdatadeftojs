module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fRegDate: { public: true, type: 'DATE' },
     fLastChangeDate: { public: true, type: 'DATE' },
     fRemQty: { public: true, type: 'FLOAT' },
     fRegQty: { public: true, type: 'FLOAT' },
     SharesSellVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fQty: { public: true, type: 'FLOAT' },
           fSellForPrice: { public: true, type: 'FLOAT' },
           fSellAgreement: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' },
           fRegDate: { public: true, type: 'DATE' },
           fRegTime: { public: true, type: 'TIME' } } } },
  indexes: { UserCodeIndex464: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }