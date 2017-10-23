module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fOrderAct: { public: true, type: 'INTEGER' },
     fOrderActUser: { public: true, type: 'TEXT' },
     fOrderActCode: { public: true, type: 'TEXT' },
     fColnr: { public: true, type: 'INTEGER' },
     fDownpayInvDebtorsAcc: { public: true, type: 'TEXT' },
     fDownpayInvDepositAcc: { public: true, type: 'TEXT' },
     fTREOFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex148: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }