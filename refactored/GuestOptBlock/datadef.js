module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromGuestCode: { public: true, type: 'TEXT' },
     fToGuestCode: { public: true, type: 'TEXT' },
     fGuestCodeFromRange: { public: true, type: 'INTEGER' } } }