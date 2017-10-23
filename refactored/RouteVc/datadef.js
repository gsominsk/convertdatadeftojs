module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fFromPlace: { public: true, type: 'TEXT' },
     fToPlace: { public: true, type: 'TEXT' },
     fDistance: { public: true, type: 'FLOAT' },
     fDuration: { public: true, type: 'TIME' } },
  indexes: { CodeIndex339: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }