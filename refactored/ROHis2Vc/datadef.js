module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAccNumber: { public: true, type: 'TEXT' },
     fObject1: { public: true, type: 'TEXT' },
     fObject2: { public: true, type: 'TEXT' },
     fObject3: { public: true, type: 'TEXT' },
     fYear: { public: true, type: 'INTEGER' },
     fMonth: { public: true, type: 'INTEGER' },
     fDeb: { public: true, type: 'FLOAT' },
     fCred: { public: true, type: 'FLOAT' },
     fDebSim: { public: true, type: 'FLOAT' },
     fCredSim: { public: true, type: 'FLOAT' },
     fDeb2: { public: true, type: 'FLOAT' },
     fCred2: { public: true, type: 'FLOAT' },
     fDebSim2: { public: true, type: 'FLOAT' },
     fCredSim2: { public: true, type: 'FLOAT' } },
  indexes: 
   { MainKeyIndex429: 
      { fields: 
         [ 'fAccNumber',
           'fObject1',
           'fObject2',
           'fObject3',
           'fYear',
           'fMonth' ],
        indicesType: 'UNIQUE' } } }