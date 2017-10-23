module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fTAXMin: { public: true, type: 'FLOAT' },
     fRegionTAXPrc: { public: true, type: 'FLOAT' },
     RSTaxVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEUCodex: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex486: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }