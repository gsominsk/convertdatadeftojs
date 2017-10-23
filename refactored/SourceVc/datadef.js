module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fContact: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fEmail: { public: true, type: 'TEXT' },
     fOrigin: { public: true, type: 'INTEGER' },
     fManufacturer: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex232: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }