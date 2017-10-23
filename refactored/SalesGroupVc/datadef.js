module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSGroupCode: { public: true, type: 'TEXT' },
     fSGroupName: { public: true, type: 'TEXT' } },
  indexes: { SGroupCodeIndex305: { fields: [ 'fSGroupCode' ], indicesType: 'UNIQUE' } } }