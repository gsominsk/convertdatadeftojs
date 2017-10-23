module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex748: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }