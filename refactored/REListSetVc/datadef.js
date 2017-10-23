module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     REListSetVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex687: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }