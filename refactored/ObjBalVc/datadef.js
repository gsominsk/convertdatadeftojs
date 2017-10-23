module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAccNumber: { public: true, type: 'TEXT' },
     fObject: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { AccObjKeyIndex9: { fields: [ 'fAccNumber', 'fObject' ], indicesType: 'UNIQUE' } } }