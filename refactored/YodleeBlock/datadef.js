module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCobrandID: { public: true, type: 'TEXT' },
     fCobrandLogin: { public: true, type: 'TEXT' },
     fCobrandPassword: { public: true, type: 'TEXT' },
     fApplicationID: { public: true, type: 'TEXT' } } }