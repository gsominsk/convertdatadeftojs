module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fQuant: { public: true, type: 'FLOAT' },
     fItem: { public: true, type: 'TEXT' },
     fSerial: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fCostPrice: { public: true, type: 'FLOAT' } },
  indexes: 
   { MainKeyIndex368: 
      { fields: [ 'fItem', 'fLocation', 'fSerial' ],
        indicesType: 'UNIQUE' } } }