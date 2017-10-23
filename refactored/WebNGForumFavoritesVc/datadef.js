module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fRecType: { public: true, type: 'INTEGER' } },
  indexes: 
   { SerNrIndex855: 
      { fields: [ 'fCustCode', 'fSerNr', 'fRecType' ],
        indicesType: 'UNIQUE' } } }