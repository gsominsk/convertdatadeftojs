module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fHWAddress: { public: true, type: 'TEXT' },
     fHWPort: { public: true, type: 'INTEGER' },
     fHWTimeout: { public: true, type: 'INTEGER' } } }