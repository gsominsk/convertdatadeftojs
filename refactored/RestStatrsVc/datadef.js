module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fArtCode: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fSalesQty: { public: true, type: 'FLOAT' },
     fStockQty: { public: true, type: 'FLOAT' },
     fPrice: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex307: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }