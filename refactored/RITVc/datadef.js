module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHeader: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { HeaderIndex726: { fields: [ 'fHeader' ], indicesType: 'UNIQUE' } } }