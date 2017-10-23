module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSign: { public: true, type: 'TEXT' },
     fPlatform: { public: true, type: 'INTEGER' },
     fRepname: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex109: 
      { fields: [ 'fSign', 'fPlatform', 'fRepname' ],
        indicesType: 'UNIQUE' } } }