module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocation: { public: true, type: 'TEXT' },
     fNT7000ServerIP: { public: true, type: 'TEXT' },
     fNT7000ServerPort: { public: true, type: 'INTEGER' },
     fMaxForkLiftForPickMode: { public: true, type: 'INTEGER' },
     fZeroTransTime: { public: true, type: 'TEXT' },
     fMaxTransTime: { public: true, type: 'TEXT' } },
  indexes: { LocationIndex728: { fields: [ 'fLocation' ], indicesType: 'UNIQUE' } } }