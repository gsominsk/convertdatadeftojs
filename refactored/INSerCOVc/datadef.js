module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     fCONr: { public: true, type: 'INTEGER' },
     fCOChildNr: { public: true, type: 'INTEGER' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' } },
  indexes: 
   { ItemCodeIndex132: 
      { fields: [ 'fItemCode', 'fSerialNr', 'fCONr', 'fCOChildNr' ],
        indicesType: 'UNIQUE' } } }