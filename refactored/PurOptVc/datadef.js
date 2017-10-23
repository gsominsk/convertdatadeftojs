module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fText1: { public: true, type: 'TEXT' },
     fText2: { public: true, type: 'TEXT' },
     fText3: { public: true, type: 'TEXT' },
     fText4: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex174: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }