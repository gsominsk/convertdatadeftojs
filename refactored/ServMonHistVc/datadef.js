module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDBSize: { public: true, type: 'INTEGER' },
     fHDFree: { public: true, type: 'INTEGER' },
     fOnline: { public: true, type: 'INTEGER' },
     fRunning: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fIStatus: { public: true, type: 'INTEGER' } },
  indexes: 
   { CodeIndex553: 
      { fields: [ 'fCode', 'fTransDate', 'fTransTime' ],
        indicesType: 'UNIQUE' } } }