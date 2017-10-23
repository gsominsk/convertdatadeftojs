module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPerson: { public: true, type: 'TEXT' },
     fPersonName: { public: true, type: 'TEXT' },
     fChConsulting: { public: true, type: 'TEXT' },
     fChProgramming: { public: true, type: 'TEXT' },
     fChProjectMan: { public: true, type: 'TEXT' },
     fChEducation: { public: true, type: 'TEXT' },
     fSupport: { public: true, type: 'TEXT' },
     fFreeService: { public: true, type: 'TEXT' },
     fCanvasCalls: { public: true, type: 'TEXT' },
     fLeads: { public: true, type: 'TEXT' },
     fSales: { public: true, type: 'TEXT' } },
  indexes: { PersonIndex434: { fields: [ 'fPerson' ], indicesType: 'UNIQUE' } } }