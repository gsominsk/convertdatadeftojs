module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fServiceCode: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' },
     fControlString: { public: true, type: 'TEXT' },
     fControlCode: { public: true, type: 'TEXT' },
     fValidUntil: { public: true, type: 'DATE' },
     fTheKeyStr: { public: true, type: 'TEXT' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fContract: { public: true, type: 'INTEGER' },
     fChildSerNr: { public: true, type: 'INTEGER' },
     fEnablerRegistration: { public: true, type: 'INTEGER' },
     fPartner: { public: true, type: 'TEXT' },
     fLastFailedContractCheck: { public: true, type: 'DATE' },
     fMaintenance: { public: true, type: 'INTEGER' },
     fLastFailedContractTime: { public: true, type: 'TIME' } },
  indexes: 
   { CustCodeIndex461: 
      { fields: [ 'fCustCode', 'fServiceCode', 'fPartner' ],
        indicesType: 'UNIQUE' } } }