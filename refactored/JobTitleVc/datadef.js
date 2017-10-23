module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTitle: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { TitleIndex712: { fields: [ 'fTitle' ], indicesType: 'UNIQUE' } } }