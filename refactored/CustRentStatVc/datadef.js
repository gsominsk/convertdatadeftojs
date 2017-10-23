module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fRentStockSum: { public: true, type: 'FLOAT' },
     fRentStockCost: { public: true, type: 'FLOAT' },
     fRentalUnits: { public: true, type: 'FLOAT' } },
  indexes: { CustCodeIndex354: { fields: [ 'fCustCode' ], indicesType: 'UNIQUE' } } }