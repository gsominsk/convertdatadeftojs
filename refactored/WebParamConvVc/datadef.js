module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fParameter: { public: true, type: 'TEXT' },
     fConverted: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fParamf: { public: true, type: 'INTEGER' } },
  indexes: { ParameterIndex284: { fields: [ 'fParameter', 'fParamf' ], indicesType: 'UNIQUE' } } }