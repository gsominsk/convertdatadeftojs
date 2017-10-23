module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     AccPeriodVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' },
           fDueDate: { public: true, type: 'DATE' },
           fComment: { public: true, type: 'TEXT' } } },
     fFiscalStartDate: { public: true, type: 'DATE' },
     fFiscalEndDate: { public: true, type: 'DATE' } },
  indexes: { CodeIndex157: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }