module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fEmployee: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fJobTitle: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSuperior: { public: true, type: 'TEXT' },
     fSuperiorName: { public: true, type: 'TEXT' },
     HRMSEVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fSkill: { public: true, type: 'TEXT' },
           fSkillComment: { public: true, type: 'TEXT' },
           fRating: { public: true, type: 'TEXT' },
           fRatingComment: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex706: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }