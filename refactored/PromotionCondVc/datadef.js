module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fConditionType: { public: true, type: 'INTEGER' },
     fCondition: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     fVRebate: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex872: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }