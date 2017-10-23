module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fTAXMin: { public: true, type: 'FLOAT' },
     fTAXAcc: { public: true, type: 'TEXT' },
     RPTaxVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEUCodex: { public: true, type: 'TEXT' },
           fTAXPrc: { public: true, type: 'FLOAT' } } },
     fTAXPrc: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex484: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }