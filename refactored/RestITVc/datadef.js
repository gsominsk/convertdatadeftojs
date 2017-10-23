module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fObject: { public: true, type: 'TEXT' },
     fRequireOpenSession: { public: true, type: 'INTEGER' },
     RestITVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fITCode: { public: true, type: 'TEXT' },
           fKitchenPrint: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex273: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }