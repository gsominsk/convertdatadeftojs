module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fLangCode: { public: true, type: 'TEXT' },
     fClassification: { public: true, type: 'TEXT' },
     fFromRecidStr: { public: true, type: 'TEXT' },
     fCompanyNr: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex201: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }