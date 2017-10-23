module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fInterviewer: { public: true, type: 'TEXT' },
     fInterviewerName: { public: true, type: 'TEXT' },
     fEmployee: { public: true, type: 'TEXT' },
     fEmployeeName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPAClass: { public: true, type: 'TEXT' },
     HRMPAVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPerfFactor: { public: true, type: 'TEXT' },
           fPerfFactorName: { public: true, type: 'TEXT' },
           fPerfRating: { public: true, type: 'TEXT' },
           fPerfRatingName: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex741: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }