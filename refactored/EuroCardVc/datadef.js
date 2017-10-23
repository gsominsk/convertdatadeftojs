module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fECCode: { public: true, type: 'TEXT' },
     fACCode: { public: true, type: 'TEXT' },
     fECComment: { public: true, type: 'TEXT' } },
  indexes: 
   { ECCodeIndex491: 
      { fields: [ 'fECCode', 'fACCode', 'fECComment' ],
        indicesType: 'UNIQUE' } } }