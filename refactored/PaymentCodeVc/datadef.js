module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fCategory: { public: true, type: 'TEXT' },
     fDesc: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex644: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }