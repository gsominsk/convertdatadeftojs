module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDate: { public: true, type: 'DATE' },
     fPrc: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex240: { fields: [ 'fDate' ], indicesType: 'UNIQUE' } } }