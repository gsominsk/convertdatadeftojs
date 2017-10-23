module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fNumUFCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex772: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }