module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fOfficialSerNr: { public: true, type: 'TEXT' },
     fTaxAdminServSeal: { public: true, type: 'TEXT' },
     fManualTaxAdminServSeal: { public: true, type: 'TEXT' },
     eShipTaxAuthReplyVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fMessage: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex802: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }