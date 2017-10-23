module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fType: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fIntRate: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex626: { fields: [ 'fType', 'fDate' ], indicesType: 'UNIQUE' } } }