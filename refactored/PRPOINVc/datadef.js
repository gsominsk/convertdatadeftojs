module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fProject: { public: true, type: 'TEXT' },
     fItem: { public: true, type: 'TEXT' },
     fPOSerNr: { public: true, type: 'INTEGER' },
     fPOQty: { public: true, type: 'FLOAT' },
     fPOVal: { public: true, type: 'FLOAT' },
     fTransDate: { public: true, type: 'DATE' } },
  indexes: 
   { ProjectIndex176: 
      { fields: [ 'fProject', 'fItem', 'fPOSerNr' ],
        indicesType: 'UNIQUE' } } }