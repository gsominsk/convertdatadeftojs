module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFromSerNo: { public: true, type: 'TEXT' },
     fToSerNo: { public: true, type: 'TEXT' },
     fTotQty: { public: true, type: 'FLOAT' },
     fUserCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fInitialValue: { public: true, type: 'FLOAT' },
     fTerminateDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex463: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }