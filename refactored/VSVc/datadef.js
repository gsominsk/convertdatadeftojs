module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMath: { public: true, type: 'INTEGER' },
     fVECode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' } },
  indexes: { VECodeIndex13: { fields: [ 'fVECode', 'fCurncyCode' ], indicesType: 'UNIQUE' } } }