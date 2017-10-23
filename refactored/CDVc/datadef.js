module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CDVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItem: { public: true, type: 'TEXT' },
           fPrice: { public: true, type: 'FLOAT' },
           fDiscount: { public: true, type: 'FLOAT' },
           fTimeClass: { public: true, type: 'TEXT' } } },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' } },
  indexes: { CustCodeIndex86: { fields: [ 'fCustCode' ], indicesType: 'UNIQUE' } } }