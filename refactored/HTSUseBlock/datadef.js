module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fServerIP: { public: true, type: 'TEXT' },
     fServerPort: { public: true, type: 'INTEGER' },
     fCustID: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fIncoming: { public: true, type: 'INTEGER' },
     fOutgoing: { public: true, type: 'INTEGER' } } }