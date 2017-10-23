module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fFunction: { public: true, type: 'TEXT' },
     fASType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex779: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }