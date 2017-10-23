module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMinAge: { public: true, type: 'INTEGER' },
     fMaxAge: { public: true, type: 'INTEGER' },
     fMinPersons: { public: true, type: 'INTEGER' },
     fMaxPersons: { public: true, type: 'INTEGER' },
     fResLoc: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex666: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }