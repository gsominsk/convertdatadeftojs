module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSHSerNr: { public: true, type: 'INTEGER' },
     SHPackagesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fQuant: { public: true, type: 'INTEGER' },
           fWidth: { public: true, type: 'FLOAT' },
           fHeight: { public: true, type: 'FLOAT' },
           fLength: { public: true, type: 'FLOAT' },
           fWeight: { public: true, type: 'FLOAT' },
           fDeclaredVal: { public: true, type: 'FLOAT' },
           fUnit: { public: true, type: 'INTEGER' },
           fPackType: { public: true, type: 'TEXT' },
           fPackComment: { public: true, type: 'TEXT' },
           fMeasurementSystem: { public: true, type: 'INTEGER' } } } },
  indexes: { SHSerNrIndex680: { fields: [ 'fSHSerNr' ], indicesType: 'UNIQUE' } } }