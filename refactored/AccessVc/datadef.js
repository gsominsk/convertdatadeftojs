module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartLevel: { public: true, type: 'INTEGER' },
     AccessVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccType: { public: true, type: 'INTEGER' },
           fAccName: { public: true, type: 'TEXT' },
           fAccLevel: { public: true, type: 'INTEGER' },
           fOpenType: { public: true, type: 'INTEGER' } } },
     fBlockAccs: { public: true, type: 'TEXT' },
     fOneFuncFlag: { public: true, type: 'INTEGER' },
     fAccessGroup: { public: true, type: 'TEXT' },
     fMasterWindow: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex14: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }