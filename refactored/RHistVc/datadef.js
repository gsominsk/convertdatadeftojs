module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fUser: { public: true, type: 'TEXT' },
     fAccode: { public: true, type: 'INTEGER' },
     fRecidStr: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex262: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }