module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fSign: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fMayHaveThreeFirst: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex490: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }