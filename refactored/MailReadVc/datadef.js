module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMailSerNr: { public: true, type: 'INTEGER' },
     fMailBoxNr: { public: true, type: 'INTEGER' },
     fAccode: { public: true, type: 'INTEGER' },
     fFDate: { public: true, type: 'DATE' },
     fFTime: { public: true, type: 'TIME' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex206: 
      { fields: [ 'fMailSerNr', 'fFDate', 'fFTime', 'fMailBoxNr', 'fAccode' ],
        indicesType: 'UNIQUE' } } }