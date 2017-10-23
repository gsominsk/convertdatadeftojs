module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fTotal: { public: true, type: 'INTEGER' },
     fImported: { public: true, type: 'INTEGER' },
     fFiltered: { public: true, type: 'INTEGER' },
     fUploaded: { public: true, type: 'INTEGER' } },
  indexes: { UserCodeIndex816: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }