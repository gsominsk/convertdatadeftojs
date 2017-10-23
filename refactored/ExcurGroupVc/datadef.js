module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTranferf: { public: true, type: 'INTEGER' },
     fOptionf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex329: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }