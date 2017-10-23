module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fAddr4: { public: true, type: 'TEXT' },
     fAddr5: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex72: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }