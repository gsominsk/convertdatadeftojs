module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fDate: { public: true, type: 'DATE' },
     fCustCode: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex189: 
      { fields: [ 'fItemCode', 'fDate', 'fFileName', 'fTransNr' ],
        indicesType: 'UNIQUE' } } }