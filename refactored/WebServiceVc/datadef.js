module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fCountry: { public: true, type: 'TEXT' },
     fHost: { public: true, type: 'TEXT' },
     fPort: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fFuncName: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fServiceServer: { public: true, type: 'TEXT' },
     fVersion: { public: true, type: 'TEXT' },
     fPartner: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fDemandContract: { public: true, type: 'INTEGER' },
     fHTTPPort: { public: true, type: 'INTEGER' },
     fAltItemCode: { public: true, type: 'TEXT' } },
  indexes: 
   { CodeIndex460: 
      { fields: [ 'fCode', 'fCountry', 'fVersion', 'fPartner' ],
        indicesType: 'UNIQUE' } } }