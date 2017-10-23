module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCompUsage: { public: true, type: 'TEXT' },
     fProdControl: { public: true, type: 'TEXT' },
     fWorkInProg: { public: true, type: 'TEXT' },
     fProdTransaction: { public: true, type: 'INTEGER' } } }