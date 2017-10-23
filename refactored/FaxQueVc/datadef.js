module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSegNr: { public: true, type: 'INTEGER' },
     fFaxNo: { public: true, type: 'TEXT' },
     fAddress: { public: true, type: 'TEXT' },
     fDocName: { public: true, type: 'TEXT' },
     fContact: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fFailedFax: { public: true, type: 'INTEGER' } },
  indexes: { SegNrIndex25: { fields: [ 'fFailedFax', 'fSegNr' ], indicesType: 'UNIQUE' } } }