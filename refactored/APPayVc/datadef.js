module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVEPNr: { public: true, type: 'INTEGER' },
     fRVal: { public: true, type: 'FLOAT' },
     fPayDate: { public: true, type: 'DATE' },
     fVECode: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fVEName: { public: true, type: 'TEXT' },
     fBookRVal: { public: true, type: 'FLOAT' } },
  indexes: { VEPNrIndex24: { fields: [ 'fVEPNr' ], indicesType: 'UNIQUE' } } }