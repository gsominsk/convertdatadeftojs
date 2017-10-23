module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fSum: { public: true, type: 'FLOAT' },
     fType: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex610: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }