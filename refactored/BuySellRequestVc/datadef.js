module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fSellFlag: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fPrice: { public: true, type: 'FLOAT' },
     fMaxQty: { public: true, type: 'FLOAT' },
     fQty: { public: true, type: 'FLOAT' },
     fOKFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex471: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }