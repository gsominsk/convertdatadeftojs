module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUseRDB: { public: true, type: 'INTEGER' },
     fSearchFlag: { public: true, type: 'INTEGER' },
     fDbName: { public: true, type: 'TEXT' },
     fDbUser: { public: true, type: 'TEXT' },
     fDbPasswd: { public: true, type: 'TEXT' },
     fDbType: { public: true, type: 'INTEGER' } } }