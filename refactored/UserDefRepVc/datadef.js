module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fShortname: { public: true, type: 'TEXT' },
     fRepname: { public: true, type: 'TEXT' },
     fCritname: { public: true, type: 'TEXT' },
     fDefname: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     UserDefRepVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fDefstr: { public: true, type: 'TEXT' },
           fDeclareBox: { public: true, type: 'INTEGER' },
           fHide: { public: true, type: 'INTEGER' },
           fPeriodType: { public: true, type: 'INTEGER' },
           fPeriodOffset: { public: true, type: 'INTEGER' },
           fPeriodLength: { public: true, type: 'INTEGER' } } },
     fPrevshortname: { public: true, type: 'TEXT' } },
  indexes: { shortnameIndex651: { fields: [ 'fShortname' ], indicesType: 'UNIQUE' } } }