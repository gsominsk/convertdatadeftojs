module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartBal: { public: true, type: 'FLOAT' },
     fEndBal: { public: true, type: 'FLOAT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fDrawer: { public: true, type: 'TEXT' },
     fTransTime: { public: true, type: 'TIME' },
     fMachineName: { public: true, type: 'TEXT' },
     CashierBalVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPMCode: { public: true, type: 'TEXT' },
           fCurncyCodeCode: { public: true, type: 'TEXT' },
           fAmount: { public: true, type: 'FLOAT' } } },
     fSalesGroup: { public: true, type: 'TEXT' } },
  indexes: 
   { UserCodeIndex239: 
      { fields: [ 'fUserCode', 'fTransDate', 'fTransTime' ],
        indicesType: 'UNIQUE' } } }