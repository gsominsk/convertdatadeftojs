module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     RegEUCodexSalesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRegion: { public: true, type: 'TEXT' },
           fEUCodex: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' },
           fRegionTAXPrc: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }