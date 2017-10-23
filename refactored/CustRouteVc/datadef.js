module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fDelAddrCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fFromLocation: { public: true, type: 'TEXT' },
     fViaLocation: { public: true, type: 'TEXT' },
     fToLocation: { public: true, type: 'TEXT' },
     fDelRoute: { public: true, type: 'TEXT' } },
  indexes: 
   { CustCodeIndex724: 
      { fields: 
         [ 'fCustCode',
           'fFromLocation',
           'fDelAddrCode',
           'fViaLocation',
           'fToLocation' ],
        indicesType: 'UNIQUE' } } }