module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'TEXT' },
     fHtmlFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex312: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }