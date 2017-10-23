module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fJobTitle: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fResponible: { public: true, type: 'TEXT' },
     fSkill: { public: true, type: 'TEXT' },
     fRequirement: { public: true, type: 'TEXT' },
     fWebFlag: { public: true, type: 'INTEGER' },
     fEndDate: { public: true, type: 'DATE' },
     fSuperiorJobPosition: { public: true, type: 'TEXT' },
     fDepCode: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     HRMJPVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEmployee: { public: true, type: 'TEXT' },
           fName: { public: true, type: 'TEXT' },
           fSource: { public: true, type: 'TEXT' } } },
     fMath2: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex705: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }