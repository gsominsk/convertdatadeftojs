module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fProdEqCode: { public: true, type: 'TEXT' },
     fProdEqName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex787: { fields: [ 'fCode', 'fProdEqCode' ], indicesType: 'UNIQUE' } } }