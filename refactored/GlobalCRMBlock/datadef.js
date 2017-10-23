module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMainCRMCompany: { public: true, type: 'TEXT' },
     fUseHTMLLetters: { public: true, type: 'INTEGER' },
     fExtraCRMCompanies: { public: true, type: 'TEXT' },
     fUserContactCompany: { public: true, type: 'TEXT' } } }