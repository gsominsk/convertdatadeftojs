module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     fClosed: { public: true, type: 'INTEGER' },
     fSum4: { public: true, type: 'FLOAT' },
     fResLoc: { public: true, type: 'TEXT' },
     RsrtEventTypePackVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEventType: { public: true, type: 'TEXT' },
           fPrice: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex668: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }