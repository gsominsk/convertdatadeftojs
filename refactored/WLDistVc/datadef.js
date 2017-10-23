module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDistCode: { public: true, type: 'TEXT' },
     fDistName: { public: true, type: 'TEXT' },
     fDistVal: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { DistCodeIndex315: { fields: [ 'fDistCode' ], indicesType: 'UNIQUE' } } }