module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSubCode: { public: true, type: 'TEXT' },
     WebItemListVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fType: { public: true, type: 'INTEGER' },
           fArgument: { public: true, type: 'TEXT' },
           fArgument2: { public: true, type: 'TEXT' },
           fClickf: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex437: { fields: [ 'fCode', 'fSubCode' ], indicesType: 'UNIQUE' } } }