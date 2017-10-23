module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromState: { public: true, type: 'TEXT' },
     fAllowedState: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { FromStateIndex869: { fields: [ 'fFromState' ], indicesType: 'UNIQUE' } } }