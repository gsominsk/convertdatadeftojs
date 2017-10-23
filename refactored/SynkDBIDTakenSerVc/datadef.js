module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDBIDCode: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fFrom: { public: true, type: 'INTEGER' },
     fTo: { public: true, type: 'INTEGER' },
     fLastNumber: { public: true, type: 'INTEGER' } },
  indexes: 
   { DBIDCodeIndex619: 
      { fields: [ 'fDBIDCode', 'fFileName', 'fFrom' ],
        indicesType: 'UNIQUE' } } }