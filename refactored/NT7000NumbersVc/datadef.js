module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLocation: { public: true, type: 'TEXT' },
     fOrdSentToNT7000: { public: true, type: 'INTEGER' },
     fLastAutomaticNr: { public: true, type: 'INTEGER' },
     fLastPickingNr: { public: true, type: 'INTEGER' } },
  indexes: { LocationIndex727: { fields: [ 'fLocation' ], indicesType: 'UNIQUE' } } }