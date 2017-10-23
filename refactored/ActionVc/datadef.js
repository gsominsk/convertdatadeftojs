module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fFromUser: { public: true, type: 'TEXT' },
     fToUser: { public: true, type: 'TEXT' },
     fAccode: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex261: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }