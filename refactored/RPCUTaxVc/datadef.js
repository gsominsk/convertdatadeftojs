module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fTAXMin: { public: true, type: 'FLOAT' },
     fTAXAcc: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     RPCUTaxVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRegion: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' },
           fTAXAcc: { public: true, type: 'TEXT' },
           fBaseMin: { public: true, type: 'FLOAT' },
           fTaxCode: { public: true, type: 'TEXT' },
           fCalculateTax: { public: true, type: 'INTEGER' } } } },
  indexes: { CustCodeIndex485: { fields: [ 'fCustCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }