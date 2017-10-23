module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fDepFrom: { public: true, type: 'TEXT' },
     fDepTo: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     AT2MovVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAT2Code: { public: true, type: 'TEXT' },
           fDescription: { public: true, type: 'TEXT' },
           fInventoryNr: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex249: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }