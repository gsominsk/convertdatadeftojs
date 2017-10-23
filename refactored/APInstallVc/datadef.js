module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVISerNr: { public: true, type: 'INTEGER' },
     fRVal: { public: true, type: 'FLOAT' },
     fDueDate: { public: true, type: 'DATE' },
     fVECode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fBookRVal: { public: true, type: 'FLOAT' },
     fInstallNr: { public: true, type: 'INTEGER' } },
  indexes: { VISerNrIndex27: { fields: [ 'fVISerNr', 'fDueDate' ], indicesType: 'UNIQUE' } } }