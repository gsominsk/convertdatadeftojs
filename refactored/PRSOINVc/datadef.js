module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fProject: { public: true, type: 'TEXT' },
     fItem: { public: true, type: 'TEXT' },
     fSOSerNr: { public: true, type: 'INTEGER' },
     fSOQty: { public: true, type: 'FLOAT' },
     fSOVal: { public: true, type: 'FLOAT' },
     fTransDate: { public: true, type: 'DATE' } },
  indexes: 
   { ProjectIndex178: 
      { fields: [ 'fProject', 'fItem', 'fSOSerNr' ],
        indicesType: 'UNIQUE' } } }