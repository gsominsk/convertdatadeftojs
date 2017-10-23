module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     TIVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEMGroup: { public: true, type: 'TEXT' },
           fPrice0: { public: true, type: 'FLOAT' },
           fPrice1: { public: true, type: 'FLOAT' },
           fPrice2: { public: true, type: 'FLOAT' },
           fPrice3: { public: true, type: 'FLOAT' },
           fPrice4: { public: true, type: 'FLOAT' },
           fPrice5: { public: true, type: 'FLOAT' },
           fTimeClass: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex80: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }