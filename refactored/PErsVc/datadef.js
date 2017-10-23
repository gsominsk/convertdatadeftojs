module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTSSerNr: { public: true, type: 'INTEGER' },
     fDate: { public: true, type: 'DATE' },
     fItem: { public: true, type: 'TEXT' },
     fPerson: { public: true, type: 'TEXT' },
     fPRCode: { public: true, type: 'TEXT' },
     fINGroup: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex85: 
      { fields: [ 'fPerson', 'fDate', 'fItem', 'fPRCode', 'fTSSerNr', 'fFileName' ],
        indicesType: 'UNIQUE' } } }