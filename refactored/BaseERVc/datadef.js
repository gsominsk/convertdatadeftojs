module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDate: { public: true, type: 'DATE' },
     fRate1: { public: true, type: 'FLOAT' },
     fRate2: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex33: { fields: [ 'fDate' ], indicesType: 'UNIQUE' } } }