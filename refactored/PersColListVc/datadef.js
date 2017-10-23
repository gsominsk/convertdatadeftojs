module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPersColCode: { public: true, type: 'TEXT' },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: 
   { PersColCodeIndex450: 
      { fields: [ 'fPersColCode', 'fCode', 'fName', 'fFileName' ],
        indicesType: 'UNIQUE' } } }