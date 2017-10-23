module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fLCMLevel: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fExpiryDate: { public: true, type: 'DATE' },
     fPointsTo: { public: true, type: 'TEXT' },
     fPointsBalance: { public: true, type: 'FLOAT' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex731: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }