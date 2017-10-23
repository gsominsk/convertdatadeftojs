module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fProductID: { public: true, type: 'TEXT' },
     fLocalizedTitle: { public: true, type: 'TEXT' },
     fLocalizedDesc: { public: true, type: 'TEXT' },
     fPrice: { public: true, type: 'FLOAT' },
     fPriceDesc: { public: true, type: 'TEXT' } },
  indexes: { ProductIDIndex750: { fields: [ 'fProductID' ], indicesType: 'UNIQUE' } } }