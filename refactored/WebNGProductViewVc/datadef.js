module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fProduct: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex856: { fields: [ 'fCustCode', 'fProduct' ], indicesType: 'UNIQUE' } } }