module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRequireGuarantor: { public: true, type: 'INTEGER' },
     fPayMode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex415: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }