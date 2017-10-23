module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fHobFile: { public: true, type: 'TEXT' },
     HOBMakeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fHalFileName: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex401: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }