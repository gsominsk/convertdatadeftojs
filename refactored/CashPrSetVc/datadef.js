module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fBaudRate: { public: true, type: 'INTEGER' },
     fBefore: { public: true, type: 'TEXT' },
     fAfter: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex229: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }