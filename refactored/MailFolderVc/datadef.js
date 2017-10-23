module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fName: { public: true, type: 'TEXT' },
     fMailBox: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex426: { fields: [ 'fName', 'fMailBox' ], indicesType: 'UNIQUE' } } }