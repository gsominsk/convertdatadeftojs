module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMultiYear: { public: true, type: 'INTEGER' },
     fOTCode: { public: true, type: 'TEXT' },
     fTerminateFlag: { public: true, type: 'INTEGER' },
     fAutoObjects: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex8: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }