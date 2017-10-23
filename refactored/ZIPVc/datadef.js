module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fZIPCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCity: { public: true, type: 'TEXT' },
     fArea: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex277: { fields: [ 'fZIPCode' ], indicesType: 'UNIQUE' } } }