module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { UserCodeIndex241: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }