module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fRegDate: { public: true, type: 'DATE' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fDesc: { public: true, type: 'TEXT' },
     fPrice1: { public: true, type: 'FLOAT' },
     fPrice2: { public: true, type: 'FLOAT' },
     fPrice3: { public: true, type: 'FLOAT' },
     fPrice4: { public: true, type: 'FLOAT' } },
  indexes: 
   { ArtCodeIndex301: 
      { fields: [ 'fArtCode', 'fCurncyCode', 'fRegDate' ],
        indicesType: 'UNIQUE' } } }