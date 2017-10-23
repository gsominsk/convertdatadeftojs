module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRepname: { public: true, type: 'TEXT' },
     fPrintername: { public: true, type: 'TEXT' },
     fBgfilename: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex55: { fields: [ 'fRepname' ], indicesType: 'UNIQUE' } } }