module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' },
     fMinLevel: { public: true, type: 'FLOAT' },
     fMaxLevel: { public: true, type: 'FLOAT' },
     fMinPOQty: { public: true, type: 'FLOAT' },
     fNormPOQty: { public: true, type: 'FLOAT' },
     fPosition: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex306: 
      { fields: [ 'fItemCode', 'fLocation', 'fPosition' ],
        indicesType: 'UNIQUE' } } }