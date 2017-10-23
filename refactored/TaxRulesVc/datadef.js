module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTaxType: { public: true, type: 'TEXT' },
     fTaxCode: { public: true, type: 'TEXT' },
     fVATType: { public: true, type: 'INTEGER' },
     fTaxRegion: { public: true, type: 'TEXT' },
     fTaxAmount: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex613: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }