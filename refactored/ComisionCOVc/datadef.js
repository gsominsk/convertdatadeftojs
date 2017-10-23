module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' },
     fCreationDate: { public: true, type: 'DATE' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fSign: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fComType: { public: true, type: 'INTEGER' },
     ComisionCOVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fArtCode: { public: true, type: 'TEXT' },
           fComision: { public: true, type: 'FLOAT' },
           fCodeType: { public: true, type: 'INTEGER' } } } },
  indexes: { SerNrIndex475: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }