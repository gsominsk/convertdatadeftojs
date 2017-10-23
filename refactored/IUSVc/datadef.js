module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { UserCodeIndex242: { fields: [ 'fUserCode', 'fArtCode' ], indicesType: 'UNIQUE' } } }