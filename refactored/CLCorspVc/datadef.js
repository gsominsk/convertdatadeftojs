module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAccNumber: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex48: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }