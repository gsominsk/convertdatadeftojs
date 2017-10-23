module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fScheduleRule: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     PromotionVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRowType: { public: true, type: 'INTEGER' },
           fPromotionCond: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fType: { public: true, type: 'INTEGER' },
           fCondition: { public: true, type: 'TEXT' },
           fVRebate: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex870: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }