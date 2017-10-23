module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPayMethod: { public: true, type: 'INTEGER' },
     fCUClassification: { public: true, type: 'TEXT' },
     fPayDeal: { public: true, type: 'TEXT' },
     fPayMode: { public: true, type: 'TEXT' },
     fInfoElCreditCard: { public: true, type: 'TEXT' },
     fExcludeCUClassification: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex858: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }