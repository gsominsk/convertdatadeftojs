module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     AdvPriceTemplVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPeriodType: { public: true, type: 'INTEGER' },
           fLength: { public: true, type: 'INTEGER' },
           fInvBeforeDays: { public: true, type: 'INTEGER' },
           fPeriodUnit: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex363: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }