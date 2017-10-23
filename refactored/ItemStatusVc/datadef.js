module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fUValue: { public: true, type: 'FLOAT' },
     fInstock: { public: true, type: 'FLOAT' },
     fOrddOut: { public: true, type: 'FLOAT' },
     fPOQty: { public: true, type: 'FLOAT' },
     fRsrvQty: { public: true, type: 'FLOAT' },
     fPOUnOKQty: { public: true, type: 'FLOAT' },
     fInShipment: { public: true, type: 'FLOAT' },
     fInstock2: { public: true, type: 'FLOAT' },
     fProdOrd: { public: true, type: 'FLOAT' },
     fNoDataBefore: { public: true, type: 'DATE' },
     fWOrd: { public: true, type: 'FLOAT' },
     fInWSheet: { public: true, type: 'FLOAT' },
     fLeadDate: { public: true, type: 'DATE' },
     fWeighedAvPrice: { public: true, type: 'FLOAT' },
     fVariety: { public: true, type: 'TEXT' },
     fStockRsrvQty: { public: true, type: 'FLOAT' } },
  indexes: 
   { CodeIndex17: 
      { fields: [ 'fCode', 'fLocation', 'fVariety' ],
        indicesType: 'UNIQUE' } } }