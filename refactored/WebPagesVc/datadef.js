module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fHALFunc: { public: true, type: 'TEXT' },
     fNewsCode: { public: true, type: 'TEXT' },
     fPageType: { public: true, type: 'INTEGER' },
     fOnePerWhat: { public: true, type: 'INTEGER' },
     fCounterCode: { public: true, type: 'TEXT' },
     fNewsCharsToShow: { public: true, type: 'INTEGER' },
     WebPagesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fConfCode: { public: true, type: 'TEXT' },
           fNoOfMails: { public: true, type: 'INTEGER' },
           fCharsToShow: { public: true, type: 'INTEGER' },
           fDropDownNewsCode: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex282: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }