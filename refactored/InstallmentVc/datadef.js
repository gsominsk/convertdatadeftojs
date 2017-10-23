module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     InstallmentVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDays: { public: true, type: 'INTEGER' },
           fMonths: { public: true, type: 'INTEGER' },
           fPrc: { public: true, type: 'FLOAT' },
           fType: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex263: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }