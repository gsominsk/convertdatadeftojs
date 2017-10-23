module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromLocation: { public: true, type: 'TEXT' },
     fViaLocation: { public: true, type: 'TEXT' },
     fToLocation: { public: true, type: 'TEXT' },
     fDurationDays: { public: true, type: 'INTEGER' },
     fDurationTime: { public: true, type: 'TIME' } },
  indexes: 
   { FromLocationIndex448: 
      { fields: [ 'fFromLocation', 'fViaLocation', 'fToLocation' ],
        indicesType: 'UNIQUE' } } }