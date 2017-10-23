module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fFixedRPCUTax: { public: true, type: 'INTEGER' },
     fFixedWHVE: { public: true, type: 'INTEGER' },
     fRPCUTAXAcc: { public: true, type: 'TEXT' },
     fRate: { public: true, type: 'FLOAT' },
     fTaxCode: { public: true, type: 'TEXT' },
     fBaseMin: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex476: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }