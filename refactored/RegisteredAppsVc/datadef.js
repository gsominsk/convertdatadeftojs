module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fApp: { public: true, type: 'TEXT' },
     fSpecFeature: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fPerLength: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fInvoiceQty: { public: true, type: 'FLOAT' },
     fPrice: { public: true, type: 'FLOAT' },
     fVRebate: { public: true, type: 'FLOAT' } },
  indexes: 
   { AppIndex582: 
      { fields: [ 'fApp', 'fSpecFeature', 'fApp' ],
        indicesType: 'UNIQUE' } } }