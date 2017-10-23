module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fActType: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fActTypeGr: { public: true, type: 'TEXT' } },
  indexes: { UserCodeIndex745: { fields: [ 'fUserCode', 'fActType' ], indicesType: 'UNIQUE' } } }