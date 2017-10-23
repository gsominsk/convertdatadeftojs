module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fShortname: { public: true, type: 'TEXT' },
     fIdKey: { public: true, type: 'INTEGER' },
     fDesc: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fCompCode: { public: true, type: 'TEXT' },
     fCompName: { public: true, type: 'TEXT' },
     fShortName: { public: true, type: 'TEXT' },
     fObject: { public: true, type: 'TEXT' },
     fCorspObject: { public: true, type: 'TEXT' },
     UserDefRepICACLVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccNumber: { public: true, type: 'TEXT' },
           fCorspAccNumber: { public: true, type: 'TEXT' },
           fDescription: { public: true, type: 'TEXT' } } } },
  indexes: { shortnameIndex654: { fields: [ 'fShortname', 'fIdKey' ], indicesType: 'UNIQUE' } } }