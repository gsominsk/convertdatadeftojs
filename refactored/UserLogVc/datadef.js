module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUser: { public: true, type: 'TEXT' },
     fCompany: { public: true, type: 'INTEGER' },
     fEvDate: { public: true, type: 'DATE' },
     fEvTime: { public: true, type: 'TIME' },
     fWhat: { public: true, type: 'TEXT' },
     fOldinfo: { public: true, type: 'TEXT' },
     fNewinfo: { public: true, type: 'TEXT' },
     fAllowedf: { public: true, type: 'INTEGER' } },
  indexes: 
   { UserIndex505: 
      { fields: [ 'fUser', 'fEvDate', 'fEvTime' ],
        indicesType: 'UNIQUE' } } }