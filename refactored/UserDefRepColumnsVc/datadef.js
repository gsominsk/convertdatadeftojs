module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fShortname: { public: true, type: 'TEXT' },
     UserDefRepColumnsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fComment: { public: true, type: 'TEXT' },
           fColType: { public: true, type: 'INTEGER' },
           fPeriodType: { public: true, type: 'INTEGER' },
           fPeriodOffset: { public: true, type: 'INTEGER' },
           fPeriodLength: { public: true, type: 'INTEGER' },
           fObjects: { public: true, type: 'TEXT' },
           fAddInfo: { public: true, type: 'TEXT' },
           fColCode: { public: true, type: 'TEXT' },
           fHide: { public: true, type: 'INTEGER' },
           fReportPosition: { public: true, type: 'INTEGER' },
           fPrefix: { public: true, type: 'TEXT' },
           fSuffix: { public: true, type: 'TEXT' },
           fCompCode: { public: true, type: 'TEXT' },
           fCurrencyType: { public: true, type: 'INTEGER' } } } },
  indexes: { shortnameIndex653: { fields: [ 'fShortname' ], indicesType: 'UNIQUE' } } }