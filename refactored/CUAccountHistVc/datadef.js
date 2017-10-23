module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fFileName: { public: true, type: 'TEXT' },
     fSerNr: { public: true, type: 'INTEGER' },
     fSum: { public: true, type: 'FLOAT' },
     fTheCust: { public: true, type: 'TEXT' } },
  indexes: 
   { CustCodeIndex609: 
      { fields: [ 'fCustCode', 'fTransDate', 'fFileName', 'fSerNr' ],
        indicesType: 'UNIQUE' } } }