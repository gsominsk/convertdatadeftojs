module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fTag: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fColor: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex823: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }