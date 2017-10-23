module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     AT2RespVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAT2Code: { public: true, type: 'TEXT' },
           fDescription: { public: true, type: 'TEXT' },
           fInventoryNr: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex250: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }