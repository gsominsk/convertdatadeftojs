module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fStockAffectf: { public: true, type: 'INTEGER' },
     fQty: { public: true, type: 'FLOAT' },
     fRow: { public: true, type: 'INTEGER' },
     fFIFO: { public: true, type: 'INTEGER' },
     fVariety: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex366: 
      { fields: [ 'fItemCode', 'fTransDate', 'fFileName', 'fTransNr', 'fRow' ],
        indicesType: 'UNIQUE' } } }