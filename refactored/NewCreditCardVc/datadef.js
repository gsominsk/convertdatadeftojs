module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCreditCardNr: { public: true, type: 'TEXT' },
     fBankCode: { public: true, type: 'TEXT' },
     fBankName: { public: true, type: 'TEXT' },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fValidThru: { public: true, type: 'TEXT' },
     fSecurityCode: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fCredCardType: { public: true, type: 'TEXT' },
     fID: { public: true, type: 'TEXT' },
     fUserStr1: { public: true, type: 'TEXT' },
     fUserStr2: { public: true, type: 'TEXT' },
     fUserStr3: { public: true, type: 'TEXT' },
     fUserStr4: { public: true, type: 'TEXT' },
     fUserStr5: { public: true, type: 'TEXT' },
     fUserVal1: { public: true, type: 'FLOAT' },
     fUserVal2: { public: true, type: 'FLOAT' },
     fUserVal3: { public: true, type: 'FLOAT' },
     fUserDate1: { public: true, type: 'DATE' },
     fUserDate2: { public: true, type: 'DATE' },
     fUserDate3: { public: true, type: 'DATE' },
     fStart: { public: true, type: 'TEXT' },
     fIssue: { public: true, type: 'TEXT' },
     fSubscriptionID: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex215: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }