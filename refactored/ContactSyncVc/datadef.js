module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fAddrBookId: { public: true, type: 'TEXT' },
     fCust: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     ContactSyncVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLabel: { public: true, type: 'TEXT' },
           fValue: { public: true, type: 'TEXT' },
           fMapping: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex642: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }