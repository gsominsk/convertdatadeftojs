module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fAddrCode: { public: true, type: 'TEXT' },
     fCnt: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' } },
  indexes: 
   { SerNrIndex414: 
      { fields: [ 'fSerNr', 'fAddrCode', 'fTransDate' ],
        indicesType: 'UNIQUE' } } }