module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCommand: { public: true, type: 'TEXT' },
     fCatCode: { public: true, type: 'TEXT' },
     fCatName: { public: true, type: 'TEXT' },
     fUsage: { public: true, type: 'TEXT' },
     fOkOnWeb: { public: true, type: 'INTEGER' },
     fProOrNat: { public: true, type: 'INTEGER' },
     fUserDate1: { public: true, type: 'DATE' },
     fReturnType: { public: true, type: 'TEXT' },
     fMath2: { public: true, type: 'TEXT' },
     fAuthor: { public: true, type: 'TEXT' },
     fDispGroups: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     HCVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fType: { public: true, type: 'TEXT' },
           fName: { public: true, type: 'TEXT' },
           fUsage: { public: true, type: 'TEXT' } } } },
  indexes: { CommandIndex430: { fields: [ 'fCommand' ], indicesType: 'UNIQUE' } } }