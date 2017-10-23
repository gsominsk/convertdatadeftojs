module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMath: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' } },
  indexes: 
   { CustCodeIndex10: 
      { fields: [ 'fCustCode', 'fBranchID', 'fClass', 'fCurncyCode' ],
        indicesType: 'UNIQUE' } } }