module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCONr: { public: true, type: 'INTEGER' },
     fCOChildNr: { public: true, type: 'INTEGER' },
     fIVNr: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex276: 
      { fields: [ 'fCONr', 'fCOChildNr', 'fIVNr', 'fType' ],
        indicesType: 'UNIQUE' } } }