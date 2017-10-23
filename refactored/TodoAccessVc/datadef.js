module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartLevel: { public: true, type: 'INTEGER' },
     TodoAccessVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPerson: { public: true, type: 'TEXT' },
           fAccFunc: { public: true, type: 'INTEGER' },
           fAccLevel: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex611: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }