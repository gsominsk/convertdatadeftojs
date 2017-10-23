module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fWeightCoefficient: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex149: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }