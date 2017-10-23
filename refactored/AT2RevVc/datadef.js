module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fAT2GroupCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fDescription: { public: true, type: 'TEXT' },
     AT2RevVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fCoefficient: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' },
           fRevPerc: { public: true, type: 'FLOAT' } } },
     fLegalDate: { public: true, type: 'DATE' },
     fLegalCode: { public: true, type: 'TEXT' },
     fAccount: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex245: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }