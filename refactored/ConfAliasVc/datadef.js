module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fWebConf: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMailQty: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex283: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }