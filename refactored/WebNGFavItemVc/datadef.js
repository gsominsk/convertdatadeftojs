module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fOrdQty: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex849: { fields: [ 'fCustCode', 'fItemCode' ], indicesType: 'UNIQUE' } } }