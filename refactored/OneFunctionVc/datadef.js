module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     OneFunctionVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccType: { public: true, type: 'INTEGER' },
           fAccName: { public: true, type: 'TEXT' },
           fAccLevel: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex15: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }