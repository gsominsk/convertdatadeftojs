module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     HalSourceBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFileName: { public: true, type: 'TEXT' },
           fMakef: { public: true, type: 'INTEGER' },
           fModTime: { public: true, type: 'DATE' },
           fErrf: { public: true, type: 'INTEGER' },
           fSegmentNr: { public: true, type: 'INTEGER' } } } } }