module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fProgram: { public: true, type: 'INTEGER' },
     fFilename: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fConnected: { public: true, type: 'INTEGER' },
     fConnectchar: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex151: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }