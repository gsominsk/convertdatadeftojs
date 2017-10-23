module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInventoryNr: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fRow: { public: true, type: 'INTEGER' },
     fLegalCode: { public: true, type: 'TEXT' },
     fAT2Code: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex255: 
      { fields: 
         [ 'fInventoryNr',
           'fTransDate',
           'fFileName',
           'fDepartment',
           'fTransNr',
           'fRow' ],
        indicesType: 'UNIQUE' } } }