module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fIdKey: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fDesc: { public: true, type: 'TEXT' },
     fDesc2: { public: true, type: 'TEXT' },
     fDesc3: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     IncExpBookVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { IdKeyIndex422: { fields: [ 'fIdKey' ], indicesType: 'UNIQUE' } } }