module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHostingPartner: { public: true, type: 'INTEGER' },
     fCountryLocalizations: { public: true, type: 'TEXT' } } }