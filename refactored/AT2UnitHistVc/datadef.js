module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInventoryNr: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fDprVal: { public: true, type: 'FLOAT' } },
  indexes: { InventoryNrIndex398: { fields: [ 'fInventoryNr' ], indicesType: 'UNIQUE' } } }