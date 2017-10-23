module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fVarSize: { public: true, type: 'TEXT' },
     fTopOnDocMat: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex94: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }