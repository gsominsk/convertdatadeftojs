module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fPosition: { public: true, type: 'TEXT' },
     fInstock: { public: true, type: 'FLOAT' },
     fInstock2: { public: true, type: 'FLOAT' },
     fInStockMov: { public: true, type: 'FLOAT' },
     fLeftQty: { public: true, type: 'FLOAT' },
     fLocArea: { public: true, type: 'TEXT' },
     fPickOrder: { public: true, type: 'INTEGER' },
     fVariety: { public: true, type: 'TEXT' } },
  indexes: 
   { ArtCodeIndex420: 
      { fields: [ 'fArtCode', 'fPosition', 'fLocation', 'fVariety' ],
        indicesType: 'UNIQUE' } } }