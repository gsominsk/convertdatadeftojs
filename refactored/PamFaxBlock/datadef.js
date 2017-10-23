module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserName: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fMode: { public: true, type: 'INTEGER' } } }