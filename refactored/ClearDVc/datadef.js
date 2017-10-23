module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBankCode: { public: true, type: 'TEXT' },
     fAreaCode: { public: true, type: 'TEXT' },
     fDays: { public: true, type: 'INTEGER' } },
  indexes: { BankCodeIndex235: { fields: [ 'fBankCode', 'fAreaCode' ], indicesType: 'UNIQUE' } } }