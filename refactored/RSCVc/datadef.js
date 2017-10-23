module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     RSCVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPercentage: { public: true, type: 'FLOAT' },
           fResStatus: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex639: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }