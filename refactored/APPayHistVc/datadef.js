module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVEPNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fVECode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fVal: { public: true, type: 'FLOAT' },
     fBookVal: { public: true, type: 'FLOAT' },
     fVATVal: { public: true, type: 'FLOAT' },
     fVATBookVal: { public: true, type: 'FLOAT' },
     fBankCurncy: { public: true, type: 'TEXT' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fAPAcc: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex26: 
      { fields: [ 'fVEPNr', 'fFileName', 'fSerNr' ],
        indicesType: 'UNIQUE' } } }