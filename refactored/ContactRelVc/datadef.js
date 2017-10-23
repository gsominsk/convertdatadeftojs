module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fContactCode: { public: true, type: 'TEXT' },
     fContactName: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fContactPhone: { public: true, type: 'TEXT' },
     fContactMobile: { public: true, type: 'TEXT' },
     fContacteMail: { public: true, type: 'TEXT' },
     fContactTitle: { public: true, type: 'TEXT' },
     fContactAltPhone: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' },
     fJobTitle: { public: true, type: 'TEXT' } },
  indexes: 
   { CustCodeIndex501: 
      { fields: [ 'fCustCode', 'fContactCode' ],
        indicesType: 'UNIQUE' } } }