module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCalColNr: { public: true, type: 'INTEGER' },
     fInternalUse: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex361: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }