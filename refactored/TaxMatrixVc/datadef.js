module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     TaxMatrixVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVATCode: { public: true, type: 'TEXT' },
           fVATSum: { public: true, type: 'FLOAT' },
           fVATRate: { public: true, type: 'FLOAT' },
           fBaseSum: { public: true, type: 'FLOAT' },
           fCalcBase: { public: true, type: 'INTEGER' } } },
     fRoundVal: { public: true, type: 'FLOAT' } } }