module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDemandPickOrder: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex421: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }