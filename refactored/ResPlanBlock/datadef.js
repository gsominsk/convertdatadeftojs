module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fResources: { public: true, type: 'INTEGER' },
     fProduction: { public: true, type: 'INTEGER' },
     fProjects: { public: true, type: 'INTEGER' },
     fRental: { public: true, type: 'INTEGER' },
     fActivities: { public: true, type: 'INTEGER' },
     fAssets: { public: true, type: 'INTEGER' },
     fProdOperations: { public: true, type: 'INTEGER' },
     fResort: { public: true, type: 'INTEGER' },
     fDayWidth: { public: true, type: 'INTEGER' },
     fDayHeight: { public: true, type: 'INTEGER' } } }