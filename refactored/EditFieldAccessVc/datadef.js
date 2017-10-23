module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fWindowClass: { public: true, type: 'TEXT' },
     fAccessGroup: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fVcName: { public: true, type: 'TEXT' },
     EditFieldAccessVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fField: { public: true, type: 'TEXT' },
           fHide: { public: true, type: 'INTEGER' },
           fType: { public: true, type: 'INTEGER' },
           fRowf: { public: true, type: 'INTEGER' },
           fLabel: { public: true, type: 'TEXT' } } } },
  indexes: 
   { WindowClassIndex860: 
      { fields: [ 'fWindowClass', 'fAccessGroup' ],
        indicesType: 'UNIQUE' } } }