module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHost: { public: true, type: 'TEXT' },
     fPort: { public: true, type: 'INTEGER' },
     fTestTX: { public: true, type: 'INTEGER' },
     fThisIsTestTX: { public: true, type: 'INTEGER' } } }