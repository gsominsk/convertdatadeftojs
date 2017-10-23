module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSign: { public: true, type: 'TEXT' },
     fWClassName: { public: true, type: 'TEXT' },
     fSubset: { public: true, type: 'TEXT' },
     fRtleft: { public: true, type: 'INTEGER' },
     fRttop: { public: true, type: 'INTEGER' },
     fRtright: { public: true, type: 'INTEGER' },
     fRtbottom: { public: true, type: 'INTEGER' },
     fVis: { public: true, type: 'INTEGER' },
     fStartKey: { public: true, type: 'INTEGER' },
     fSortorder: { public: true, type: 'INTEGER' },
     fFirsttile: { public: true, type: 'INTEGER' },
     fFirstflip: { public: true, type: 'INTEGER' },
     WRVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fType: { public: true, type: 'INTEGER' },
           fTag: { public: true, type: 'TEXT' },
           fStr0: { public: true, type: 'TEXT' },
           fStr1: { public: true, type: 'TEXT' },
           fLong0: { public: true, type: 'INTEGER' },
           fLong1: { public: true, type: 'INTEGER' } } },
     fKeepopenf: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex137: 
      { fields: [ 'fSign', 'fWClassName', 'fSubset' ],
        indicesType: 'UNIQUE' } } }