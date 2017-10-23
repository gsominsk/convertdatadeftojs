module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fDevice: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex775: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }