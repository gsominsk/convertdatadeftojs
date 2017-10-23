module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPipelineColNr: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex113: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }