module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDontInclFlag: { public: true, type: 'INTEGER' },
     fColor: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex794: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }