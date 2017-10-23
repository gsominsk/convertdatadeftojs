module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     AgentAddonVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fType: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fArtCode: { public: true, type: 'TEXT' } } } },
  indexes: { CUCodeIndex867: { fields: [ 'fCUCode' ], indicesType: 'UNIQUE' } } }