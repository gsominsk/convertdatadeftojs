module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromStatus: { public: true, type: 'TEXT' },
     fStatusAllowed: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { FromStatusIndex310: { fields: [ 'fFromStatus' ], indicesType: 'UNIQUE' } } }