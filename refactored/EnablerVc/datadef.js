module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fName: { public: true, type: 'TEXT' },
     fData: { public: true, type: 'TEXT' } },
  indexes: { NameIndex643: { fields: [ 'fName' ], indicesType: 'UNIQUE' } } }