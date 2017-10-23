module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     ProgFollowUpsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDays: { public: true, type: 'INTEGER' },
           fDayRef: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' },
           fPercent: { public: true, type: 'FLOAT' },
           fActType: { public: true, type: 'TEXT' },
           fMainPersons: { public: true, type: 'TEXT' },
           fNReservationStatus: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex342: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }