module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fNumber: { public: true, type: 'TEXT' },
     fRegType: { public: true, type: 'INTEGER' },
     fName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex271: { fields: [ 'fCode', 'fRegType' ], indicesType: 'UNIQUE' } } }