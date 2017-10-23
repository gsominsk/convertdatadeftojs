module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fLMCardNr: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fPoints: { public: true, type: 'FLOAT' },
     fFWBalance: { public: true, type: 'FLOAT' },
     fPointsFrom: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fSerNr: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex733: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }