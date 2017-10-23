module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fExportFileName: { public: true, type: 'TEXT' } } }