module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRepname: { public: true, type: 'TEXT' },
     fShortname: { public: true, type: 'TEXT' },
     fHeader: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex53: { fields: [ 'fRepname' ], indicesType: 'UNIQUE' } } }