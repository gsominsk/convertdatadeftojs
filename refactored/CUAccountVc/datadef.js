module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fInvToCust: { public: true, type: 'TEXT' },
     fInvToCustName: { public: true, type: 'TEXT' },
     fRegDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     fThisAccount: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' } },
  indexes: 
   { CustCodeIndex608: 
      { fields: 
         [ 'fCustCode',
           'fEndDate',
           'fThisAccount',
           'fFileName',
           'fSerNr',
           'fInvToCust' ],
        indicesType: 'UNIQUE' } } }