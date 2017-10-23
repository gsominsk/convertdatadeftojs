module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransDate: { public: true, type: 'DATE' },
     fValuePerShare: { public: true, type: 'FLOAT' } },
  indexes: { TransDateIndex470: { fields: [ 'fTransDate' ], indicesType: 'UNIQUE' } } }