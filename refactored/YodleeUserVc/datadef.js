module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fYodleeUsername: { public: true, type: 'TEXT' },
     fYodleePassword: { public: true, type: 'TEXT' },
     fYodleeID: { public: true, type: 'TEXT' },
     fAllowedBankAccs: { public: true, type: 'TEXT' } },
  indexes: { UserCodeIndex877: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }