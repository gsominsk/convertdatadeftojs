module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex544: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }