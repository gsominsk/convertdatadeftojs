module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAccNumber: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     Bud1VcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fBudDate: { public: true, type: 'DATE' },
           fDefStr: { public: true, type: 'TEXT' },
           fSval: { public: true, type: 'FLOAT' } } },
     fComment: { public: true, type: 'TEXT' },
     fBFCode: { public: true, type: 'TEXT' },
     fYearVal: { public: true, type: 'FLOAT' },
     fPrevProc: { public: true, type: 'FLOAT' },
     fBudSum: { public: true, type: 'FLOAT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fClass: { public: true, type: 'TEXT' } },
  indexes: 
   { AccObjKeyIndex43: 
      { fields: [ 'fAccNumber', 'fObjects', 'fClass', 'fStartDate' ],
        indicesType: 'UNIQUE' } } }