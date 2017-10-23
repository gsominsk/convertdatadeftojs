module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fVehicle: { public: true, type: 'TEXT' },
     fKm: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex340: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }