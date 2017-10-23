module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fShortname: { public: true, type: 'TEXT' },
     fIdKey: { public: true, type: 'INTEGER' },
     fDesc: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRsType: { public: true, type: 'INTEGER' },
     fAccType: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fDCSide: { public: true, type: 'INTEGER' },
     fDCSaldo: { public: true, type: 'INTEGER' },
     fDesc2: { public: true, type: 'TEXT' },
     fDesc3: { public: true, type: 'TEXT' },
     fSpecCode: { public: true, type: 'TEXT' },
     UserDefRepLinesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fCorspAcc: { public: true, type: 'TEXT' } },
  indexes: { shortnameIndex652: { fields: [ 'fShortname', 'fIdKey' ], indicesType: 'UNIQUE' } } }