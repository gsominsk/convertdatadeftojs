module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fAccNumber1: { public: true, type: 'TEXT' },
     fAccNumber2: { public: true, type: 'TEXT' },
     fAccNumber3: { public: true, type: 'TEXT' },
     fAccNumber4: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex286: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }