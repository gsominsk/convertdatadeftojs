module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fItemType: { public: true, type: 'INTEGER' },
     fQty: { public: true, type: 'FLOAT' },
     fMaintDate: { public: true, type: 'DATE' } },
  indexes: { MainKeyIndex409: { fields: [ 'fItemCode', 'fLocation' ], indicesType: 'UNIQUE' } } }