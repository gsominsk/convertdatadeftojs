module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fMother: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex244: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }