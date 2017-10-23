module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPartner: { public: true, type: 'INTEGER' },
     fLiveFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex502: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }