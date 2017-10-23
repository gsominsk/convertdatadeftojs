module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fPDType: { public: true, type: 'INTEGER' },
     fPdays: { public: true, type: 'INTEGER' },
     fPdvrebt: { public: true, type: 'FLOAT' },
     fPdrdays: { public: true, type: 'INTEGER' },
     fPdComment: { public: true, type: 'TEXT' },
     fPdCashAcc: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fInstallment: { public: true, type: 'TEXT' },
     fPdSalesAcc: { public: true, type: 'TEXT' },
     fPdvrebt2: { public: true, type: 'FLOAT' },
     fPdrdays2: { public: true, type: 'INTEGER' },
     PDVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex35: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }