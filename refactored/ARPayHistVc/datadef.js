module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUPNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fVal: { public: true, type: 'FLOAT' },
     fBookVal: { public: true, type: 'FLOAT' },
     fVATVal: { public: true, type: 'FLOAT' },
     fVATBookVal: { public: true, type: 'FLOAT' },
     fBankCurncy: { public: true, type: 'TEXT' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fTAX1Sum: { public: true, type: 'FLOAT' },
     fTAX1SumBook: { public: true, type: 'FLOAT' },
     fARAcc: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex20: 
      { fields: [ 'fCUPNr', 'fFileName', 'fSerNr' ],
        indicesType: 'UNIQUE' } } }