module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCourseCode: { public: true, type: 'TEXT' },
     fCourseName: { public: true, type: 'TEXT' },
     CourseMediaVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fType: { public: true, type: 'INTEGER' },
           fLangCode: { public: true, type: 'TEXT' },
           fLink: { public: true, type: 'TEXT' },
           fExtraInfo: { public: true, type: 'TEXT' } } } },
  indexes: { CourseCodeIndex857: { fields: [ 'fCourseCode' ], indicesType: 'UNIQUE' } } }