module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fEventDate: { public: true, type: 'DATE' },
     fLocation: { public: true, type: 'TEXT' },
     fItemType: { public: true, type: 'INTEGER' },
     fQty: { public: true, type: 'FLOAT' },
     fOrderedDate: { public: true, type: 'DATE' },
     fMaintDate: { public: true, type: 'DATE' } },
  indexes: 
   { MainKeyIndex408: 
      { fields: [ 'fFileName', 'fItemCode', 'fEventDate', 'fLocation' ],
        indicesType: 'UNIQUE' } } }