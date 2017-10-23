module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: 
   { CodeIndex345: 
      { fields: [ 'fCode', 'fPassword', 'fFileName' ],
        indicesType: 'UNIQUE' } } }