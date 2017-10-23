module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSeqNr: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex223: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }