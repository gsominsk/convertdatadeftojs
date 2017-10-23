module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fOrderDate: { public: true, type: 'DATE' },
     fLocation: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' },
     fItemType: { public: true, type: 'INTEGER' },
     fQty: { public: true, type: 'FLOAT' },
     fNeededDate: { public: true, type: 'DATE' },
     fMaintDate: { public: true, type: 'DATE' } },
  indexes: 
   { MainKeyIndex407: 
      { fields: [ 'fFileName', 'fItemCode', 'fNeededDate', 'fLocation', 'fVECode' ],
        indicesType: 'UNIQUE' } } }