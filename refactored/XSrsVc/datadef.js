module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransType: { public: true, type: 'INTEGER' },
     fToFileName: { public: true, type: 'TEXT' },
     fToSerNr: { public: true, type: 'INTEGER' },
     fToRow: { public: true, type: 'INTEGER' },
     fFromFileName: { public: true, type: 'TEXT' },
     fFromSerNr: { public: true, type: 'INTEGER' },
     fFromRow: { public: true, type: 'INTEGER' },
     fFromQty: { public: true, type: 'FLOAT' } },
  indexes: 
   { MainKeyIndex127: 
      { fields: 
         [ 'fTransType',
           'fToFileName',
           'fToSerNr',
           'fToRow',
           'fFromFileName',
           'fFromSerNr',
           'fFromRow' ],
        indicesType: 'UNIQUE' } } }