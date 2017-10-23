module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPLCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fSalesAcc: { public: true, type: 'TEXT' },
     PLQVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fQtyLimit: { public: true, type: 'FLOAT' },
           fExVatPrice: { public: true, type: 'FLOAT' },
           fFormulae: { public: true, type: 'TEXT' } } } },
  indexes: { PLCodeIndex385: { fields: [ 'fPLCode', 'fArtCode' ], indicesType: 'UNIQUE' } } }