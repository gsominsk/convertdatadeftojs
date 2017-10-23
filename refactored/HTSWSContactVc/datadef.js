module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fContactCode: { public: true, type: 'TEXT' },
     fContactName: { public: true, type: 'TEXT' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fFromPhoneNo: { public: true, type: 'TEXT' },
     fSMSSent: { public: true, type: 'INTEGER' },
     fSMSTime: { public: true, type: 'TIME' } },
  indexes: { CodeIndex510: { fields: [ 'fCode', 'fContactCode' ], indicesType: 'UNIQUE' } } }