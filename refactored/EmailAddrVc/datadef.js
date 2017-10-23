module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fAddrName: { public: true, type: 'TEXT' },
     fAddrCode: { public: true, type: 'TEXT' },
     EmailAddrVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fExternalEmail: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex795: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }