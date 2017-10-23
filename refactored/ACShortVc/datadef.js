module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAccNumber: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex323: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }