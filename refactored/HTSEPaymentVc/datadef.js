module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustID: { public: true, type: 'TEXT' },
     fCustOPSerNr: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' },
     fCreationDate: { public: true, type: 'DATE' },
     fCreationTime: { public: true, type: 'TIME' },
     fCorspOPRows: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     fSent: { public: true, type: 'INTEGER' },
     fCompID: { public: true, type: 'TEXT' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fCustQueSerNr: { public: true, type: 'INTEGER' },
     fBankUniqueID: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'INTEGER' },
     fPartner: { public: true, type: 'TEXT' },
     fDBID: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fNrOfPayments: { public: true, type: 'INTEGER' },
     fCYVATNr: { public: true, type: 'TEXT' },
     fCYRegNr1: { public: true, type: 'TEXT' },
     fCompNr: { public: true, type: 'INTEGER' },
     fCustClientIP: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex451: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }