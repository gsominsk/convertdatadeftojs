module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     AT2RevListVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fInventoryNr: { public: true, type: 'TEXT' },
           fAT2RevSerNr: { public: true, type: 'INTEGER' } } } },
  indexes: { SerNrIndex253: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }