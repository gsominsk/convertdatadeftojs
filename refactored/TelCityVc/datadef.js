module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fZone: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fCntyCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex389: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }