module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fCardType: { public: true, type: 'TEXT' },
     fNrLiq: { public: true, type: 'INTEGER' },
     CouponConVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccNumber: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' } } } },
  indexes: { SerNrIndex295: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }