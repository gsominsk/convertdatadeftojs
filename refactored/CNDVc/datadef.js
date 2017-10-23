module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     CNDVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDays: { public: true, type: 'INTEGER' },
           fPercentage: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex636: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }