module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fCreditLimitDate: { public: true, type: 'DATE' },
     fVECreditLimitDate: { public: true, type: 'DATE' },
     fCreditLimit: { public: true, type: 'FLOAT' },
     fVECreditLimit: { public: true, type: 'FLOAT' },
     fCreditLimitDays: { public: true, type: 'INTEGER' },
     fVECreditLimitDays: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex834: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }