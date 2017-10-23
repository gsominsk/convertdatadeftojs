module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fFilterType: { public: true, type: 'INTEGER' },
     fFilter: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex871: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }