module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fObject: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' } },
  indexes: 
   { MainKeyIndex141: 
      { fields: [ 'fObject', 'fDate', 'fSerNr', 'fFileName' ],
        indicesType: 'UNIQUE' } } }