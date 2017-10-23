module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fPositionDate: { public: true, type: 'DATE' },
     fPositionTime: { public: true, type: 'TIME' },
     fLatitude: { public: true, type: 'FLOAT' },
     fLongitude: { public: true, type: 'FLOAT' },
     fAltitude: { public: true, type: 'FLOAT' },
     fOKFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex629: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }