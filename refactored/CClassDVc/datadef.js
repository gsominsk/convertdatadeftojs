module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     CClassDVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCClass: { public: true, type: 'TEXT' },
           fType: { public: true, type: 'INTEGER' },
           fPercentage: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex638: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }