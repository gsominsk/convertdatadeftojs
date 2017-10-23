module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fDrawer: { public: true, type: 'TEXT' },
     fMachineName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTotal: { public: true, type: 'FLOAT' },
     fEvent: { public: true, type: 'INTEGER' },
     fInvalid: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fCredAcc: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     CashVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPMCode: { public: true, type: 'TEXT' },
           fCurncyCodeCode: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' },
           fDenomination: { public: true, type: 'INTEGER' },
           fDenominationValue: { public: true, type: 'FLOAT' },
           fDenominationQty: { public: true, type: 'FLOAT' } } },
     fSkipUpdatTime: { public: true, type: 'INTEGER' },
     fSalesGroup: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex406: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }