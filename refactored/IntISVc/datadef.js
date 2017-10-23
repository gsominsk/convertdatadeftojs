module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInstock: { public: true, type: 'FLOAT' },
     fCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fVariety: { public: true, type: 'TEXT' } },
  indexes: 
   { CodeIndex367: 
      { fields: [ 'fCode', 'fLocation', 'fVariety' ],
        indicesType: 'UNIQUE' } } }