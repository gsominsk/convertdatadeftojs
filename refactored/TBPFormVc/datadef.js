module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSelBase: { public: true, type: 'INTEGER' },
     fPerc: { public: true, type: 'FLOAT' },
     fAdd1Val: { public: true, type: 'FLOAT' },
     fRndTo: { public: true, type: 'INTEGER' },
     fAdd2Val: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex74: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }