module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ItemTileLabelBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLabel: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' },
           fTileNr: { public: true, type: 'INTEGER' } } } } }