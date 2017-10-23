module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fOrderAct: { public: true, type: 'INTEGER' },
     fActMainPerson: { public: true, type: 'TEXT' },
     fActType: { public: true, type: 'TEXT' },
     fColnr: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex266: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }