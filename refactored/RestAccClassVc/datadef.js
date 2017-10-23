module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex753: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }