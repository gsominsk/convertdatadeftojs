module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPCode: { public: true, type: 'TEXT' },
     fPurpose: { public: true, type: 'TEXT' } },
  indexes: { PCodeIndex316: { fields: [ 'fPCode' ], indicesType: 'UNIQUE' } } }