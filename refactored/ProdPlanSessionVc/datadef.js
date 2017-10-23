module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSessionID: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fStatusFlag: { public: true, type: 'INTEGER' },
     fStatusStr: { public: true, type: 'TEXT' } },
  indexes: { SessionIDIndex791: { fields: [ 'fSessionID' ], indicesType: 'UNIQUE' } } }