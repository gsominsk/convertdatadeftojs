module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRespPM: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex780: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }