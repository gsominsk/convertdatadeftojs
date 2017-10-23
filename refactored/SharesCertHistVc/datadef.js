module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fPerson: { public: true, type: 'TEXT' },
     fPersonName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fRow: { public: true, type: 'INTEGER' },
     fQty: { public: true, type: 'FLOAT' },
     fType: { public: true, type: 'INTEGER' },
     fCertificateSerNr: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex467: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }