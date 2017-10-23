module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustID: { public: true, type: 'TEXT' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fPINCode: { public: true, type: 'TEXT' },
     fRegDate: { public: true, type: 'DATE' },
     fRegTime: { public: true, type: 'TIME' },
     fDBID: { public: true, type: 'TEXT' } },
  indexes: 
   { CustIDIndex528: 
      { fields: [ 'fCustID', 'fRegInCountry', 'fPINCode' ],
        indicesType: 'UNIQUE' } } }