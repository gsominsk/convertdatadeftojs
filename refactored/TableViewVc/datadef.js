module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fImageFileName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex752: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }