module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCODate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fPayDeal: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex751: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }