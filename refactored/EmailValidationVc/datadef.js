module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEmail: { public: true, type: 'TEXT' },
     fRegistrationNumber: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fLanguage: { public: true, type: 'TEXT' } },
  indexes: 
   { EmailStatusIndex837: 
      { fields: [ 'fEmail', 'fRegistrationNumber', 'fStatus' ],
        indicesType: 'UNIQUE' } } }