module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInventoryNr: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fSum: { public: true, type: 'FLOAT' },
     fType: { public: true, type: 'INTEGER' },
     fIntYc: { public: true, type: 'INTEGER' },
     fSum2: { public: true, type: 'FLOAT' } },
  indexes: 
   { InventoryNrIndex257: 
      { fields: [ 'fInventoryNr', 'fTransNr', 'fIntYc' ],
        indicesType: 'UNIQUE' } } }